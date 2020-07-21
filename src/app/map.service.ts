import { Injectable, ElementRef } from '@angular/core';
import { UtilService } from './util.service';
import { HttpClient } from '@angular/common/http';

import markers from './markers.json';
import { Router } from '@angular/router';

declare var H: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: any;
  mapElement: ElementRef;
  mapStyle: any;

  reader: any;

  layers: { id: string, color: string }[] = [];

  platform = new H.service.Platform({
    "apiKey": "wMf9ma7exbMTZgkYuj1alATsY2ae9fYC5dq9S2JeM04",
    "app_id": "qAMCTJGPeltVqBKe46Eh",
    "app_code": "c3REcMU3S-XYbmBR94s8wA"
  });

  selectedMarkers: string[] = [
    "parking_car"
  ];

  constructor(private U: UtilService, private http: HttpClient, private router: Router) { }

  resetMap() {
    this.fetchCoords((lat, lng) => {
      let defaultLayers = this.platform.createDefaultLayers();
      this.map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.vector.normal.map,
        {
          zoom: 16,
          center: { lat: lat, lng: lng }
        }
      );

      var mapListener = mapEvent => {
        if (this.map.getZoom() >= 16) if (mapEvent.oldValue.lookAt) if (mapEvent.oldValue.lookAt.position !== { lat: 0, lng: 0 }) {
          this.map.removeEventListener("mapviewchange", mapListener);
          this.selectedMarkers.forEach(selectedMarker => {
            var icon = new H.map.Icon(markers.find(marker => marker.name === selectedMarker).icon, {
              size: {
                w: 24, h: 24
              }
            })
            this.reader = new H.data.geojson.Reader("/assets/geoJSON/" + selectedMarker + ".json", {
              disableLegacyMode: true,
              style: (style) => style.setIcon(icon)
            });
            var bounds = mapEvent.newValue.lookAt.bounds.ab.W;
            this.parseData({ high: { lat: bounds[0], lng: bounds[1] }, low: { lat: bounds[6], lng: bounds[7] } });
          });
        }
      };
      this.map.addEventListener("mapviewchange", mapListener);
      var ui = H.ui.UI.createDefault(this.map, defaultLayers);
      var mapEvents = new H.mapevents.MapEvents(this.map);
      var behavior = new H.mapevents.Behavior(mapEvents);

      var provider = this.map.getBaseLayer().getProvider();
      this.mapStyle = provider.getStyle();

      var changeListener = (evt: any) => {
        if (this.mapStyle.getState() === H.map.Style.State.READY) {
          this.mapStyle.removeEventListener('change', changeListener);
          this.markLayers();
        }
      };
      this.mapStyle.addEventListener('change', changeListener);
    });
  }

  parseData(bounds: { high: { lat: number, lng: number }, low: { lat: number, lng: number } }) {
    var geoListener = stateEvent => {
      if (stateEvent.state === 2) {
        this.reader.removeEventListener("statechange", geoListener);
        var objects = this.reader.getParsedObjects()[0].getObjects();
        for (var i = 0; i < objects.length; i++) {
          var point = objects[i].b;
          if (point.lat >= bounds.high.lat || point.lng >= bounds.high.lng || point.lat <= bounds.low.lat || point.lng <= bounds.low.lng) {
            objects[i].setVisibility(false);
          }
        };
        this.map.addLayer(this.reader.getLayer());
      }
    };
    this.reader.addEventListener("statechange", geoListener);
    this.reader.parse();
  }

  fetchCoords(cb: (lat: number, lng: number) => void) {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(
      (position: Position) => {
        cb(47.37666, 8.5389);
        // cb(position.coords.latitude, position.coords.longitude);
      },
      (error: PositionError) => console.log(error),
      { timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 }
    );
  }

  markLayers() {
    this.layers.forEach(layer => {
      var layerConfig = this.mapStyle.extractConfig([layer.id]);
      var draw = this.U.accessProperty(layer.id, layerConfig.layers).draw;
      draw[draw["polygons"] ? "polygons" : "lines"].color = layer.color;
      this.mapStyle.mergeConfig(layerConfig);
    });
  }
}
