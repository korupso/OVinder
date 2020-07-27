import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  mapObjects: { name: string, objects: any[] }[] = [];

  ui: any;

  layers: { id: string, color: string }[] = [];

  platform = new H.service.Platform({
    "apiKey": "wMf9ma7exbMTZgkYuj1alATsY2ae9fYC5dq9S2JeM04",
    "app_id": "qAMCTJGPeltVqBKe46Eh",
    "app_code": "c3REcMU3S-XYbmBR94s8wA"
  });

  selectedMarkers: string[] = [
    "parking_garage"
  ];

  constructor(private U: UtilService, private http: HttpClient, private router: Router) { }

  /**
   * This function is called, whenever the map needs a reset.
   */
  resetMap() {
    this.fetchCoords((lat, lng) => {
      let defaultLayers = this.platform.createDefaultLayers();
      this.map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.vector.normal.map,
        {
          zoom: 17,
          center: { lat: lat, lng: lng }
        }
      );

      var mapViewListener = mapEvent => {
        if (this.map.getZoom() >= 16) {
          this.updateVisibility(this.map.getViewModel().getLookAtData().bounds.getBoundingBox());
        }
      };
      this.map.addEventListener("mapviewchangeend", mapViewListener);

      /*var boundingBoxValidationObject = {
        aa: -180,
        da: 180,
        ia: 90,
        la: -90
      };
      Object.entries(this.map.getViewModel().getLookAtData().bounds.getBoundingBox()).filter(entry => {
        if (boundingBoxValidationObject[entry[0]]) {
          if (boundingBoxValidationObject[entry[0]] === entry[1]) {
            return false;
          }
        }
        
      });
      do {
        setTimeout(() => { }, 50);
      } while (this.map.getViewModel().getLookAtData().bounds.getBoundingBox() === { a: null, aa: -180, b: null, c: null, da: 180, ia: 90, la: -90 });
      console.log(this.map.getViewModel().getLookAtData().bounds.getBoundingBox());*/

      var mapListener = mapEvent => {
        this.map.removeEventListener("mapviewchangeend", mapListener);
        this.selectedMarkers.forEach(selectedMarker => {
          this.parseData(selectedMarker, layer => {
            this.updateVisibility(this.map.getViewModel().getLookAtData().bounds.getBoundingBox());
            this.map.addLayer(layer.setMin(16));
          });
        });
      };
      this.map.addEventListener("mapviewchangeend", mapListener);
      this.ui = H.ui.UI.createDefault(this.map, defaultLayers);
      var mapEvents = new H.mapevents.MapEvents(this.map);
      var behavior = new H.mapevents.Behavior(mapEvents);

      var provider = this.map.getBaseLayer().getProvider();
      this.mapStyle = provider.getStyle();

      var changeListener = evt => {
        if (this.mapStyle.getState() === H.map.Style.State.READY) {
          this.mapStyle.removeEventListener('change', changeListener);
          this.markLayers();
        }
      };
      this.mapStyle.addEventListener('change', changeListener);
    });
  }

  /**
   * Parses the data for the current geoJSON file and makes only the markers visible, which should be visible.
   * @param bounds Contains the coordinates of the top right and bottom left corners of the visible map.
   */
  parseData(selectedMarker: string, cb: (layer: any) => void) {
    var icon = new H.map.Icon(markers.find(marker => marker.name === selectedMarker).icon, {
      size: {
        w: 24,
        h: 24
      },
      anchor: {
        x: 12,
        y: 12
      }
    });
    var reader = new H.data.geojson.Reader("/assets/geoJSON/" + selectedMarker + ".json", {
      disableLegacyMode: true,
      style: marker => marker.setIcon(icon)
    });
    var geoListener = stateEvent => {
      if (stateEvent.state === 2) {
        reader.removeEventListener("statechange", geoListener);
        reader.getParsedObjects()[0].getObjects().forEach(object => {
          object.addEventListener("tap", evt => {
            var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
              content: evt.target.getData().bubble
            });

            this.ui.addBubble(bubble);
          });
        });
        this.mapObjects.push({ name: selectedMarker, objects: reader.getParsedObjects()[0].getObjects() });
        cb(reader.getLayer());
      }
    };
    reader.addEventListener("statechange", geoListener);
    reader.parse();
  }

  /**
   * Updates the visibility of all markers on the map.
   * @param bounds The current view bounds of the map.
   */
  updateVisibility = (bounds: any) => this.mapObjects.forEach(mapObject => mapObject.objects.forEach(obj => obj.setVisibility(bounds.containsPoint(obj.b))));

  /**
   * Get the user's coordinates, using the gps permission.
   * @param cb Callback function to return the coordinates asynchronously.
   */
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

  /**
   * Marks all layers, that are defined in the layers array.
   */
  markLayers() {
    this.layers.forEach(layer => {
      var layerConfig = this.mapStyle.extractConfig([layer.id]);
      var draw = this.U.accessProperty(layer.id, layerConfig.layers).draw;
      draw[draw["polygons"] ? "polygons" : "lines"].color = layer.color;
      this.mapStyle.mergeConfig(layerConfig);
    });
  }
}
