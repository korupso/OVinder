import { Injectable, ElementRef } from '@angular/core';
import { UtilService } from './util.service';

import markers from './markers.json';

declare var H: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: any;
  mapElement: ElementRef;
  mapStyle: any;

  layers: { id: string, color: string }[] = [];

  platform = new H.service.Platform({
    "apiKey": "wMf9ma7exbMTZgkYuj1alATsY2ae9fYC5dq9S2JeM04",
    "app_id": "qAMCTJGPeltVqBKe46Eh",
    "app_code": "c3REcMU3S-XYbmBR94s8wA"
  });

  selectedMarkers: string[] = [
    "parking_bike",
    "parking_garage",
    "parking_disabled"
  ];

  constructor(private U: UtilService) { }

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

      markers.forEach(marker => {
        if (this.selectedMarkers.includes(marker.name)) this.fetchData(marker.name, data => {
          this.addMarkers(data, new H.map.Icon(marker.icon, { size: { w: 24, h: 24 } }))
        });
      });
    });
  }

  fetchData(name: string, cb: (data: any) => void) {
    import('./geoJSON/' + name + ".json").then(data => {
      cb(data.default);
    });
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

  addMarkers(data: { type: string, geometry: { type: string, coordinates: number[], }, properties: any, }[], icon: string) {
    var markers = [];
    for (var i = 0; i < data.length; i++) {
      markers.push(new H.map.Marker({ lat: data[i].geometry.coordinates[1], lng: data[i].geometry.coordinates[0] }, { icon: icon, min: 16 }));
    }
    this.map.addObjects(markers);
  }
}
