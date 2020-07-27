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
    var start = new Date().getTime();
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

      var mapListener = mapEvent => {
        this.map.removeEventListener("mapviewchangeend", mapListener);
        this.selectedMarkers.forEach(selectedMarker => {
          this.parseData(selectedMarker, layer => {
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
    console.log("resetMap", new Date().getTime() - start);
  }

  /**
   * Parses the data for the current geoJSON file and makes only the markers visible, which should be visible.
   * @param bounds Contains the coordinates of the top right and bottom left corners of the visible map.
   */
  parseData(selectedMarker: string, cb: (layer: any) => void) {
    var start = new Date().getTime();
    var marker = markers.find(marker => marker.name === selectedMarker);
    var icon = new H.map.Icon(marker.icon, {
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
      style: markerObj => markerObj.setIcon(icon)
    });
    var geoListener = stateEvent => {
      if (stateEvent.state === 2) {
        reader.removeEventListener("statechange", geoListener);
        reader.getParsedObjects()[0].getObjects().forEach(object => {
          object.addEventListener("tap", evt => {
            this.map.setCenter(object.getGeometry(), true);
            this.ui.getBubbles().forEach(bubble => this.ui.removeBubble(bubble));

            var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
              content: this.infoToHTML(object, marker.info)
            });

            console.log(bubble);

            this.ui.addBubble(bubble);
          });
        });
        this.mapObjects.push({ name: selectedMarker, objects: reader.getParsedObjects()[0].getObjects() });
        cb(reader.getLayer());
      }
    };
    reader.addEventListener("statechange", geoListener);
    reader.parse();
    console.log("parseData", new Date().getTime() - start);
  }

  infoToHTML(marker, info): string {
    var start = new Date().getTime();
    var html = "";

    if (info.name) {
      html += "<h3>";
      info.name.forEach(name => html += marker.data[name] + " ");
      html = html.slice(0, html.length - 1) + "</h3><br>";
    }

    if (info.parking_spaces) {
      html += "<span style=\"color:#444444\">";
      info.parking_spaces.forEach(parking_spaces => html += parking_spaces + ": " + marker.data[parking_spaces] + "<br>");
      html += "</span><br>";
    }

    if (info.misc) {
      html += "<span style=\"color:#333333\">";
      info.misc.forEach(misc => html += misc + ": " + marker.data[misc] + "<br>");
      html = html.slice(0, html.length - 4) + "</span><br>";
    }

    if (info.links) {
      info.links.forEach(link => html += "<a href=\"" + marker.data[link] + "\">" + link + "</a><br>");
    }

    html = html.slice(0, html.length - 4);

    console.log("infoToHTML", new Date().getTime() - start);
    return html;
  }

  /**
   * Updates the visibility of all markers on the map.
   * @param bounds The current view bounds of the map.
   */
  updateVisibility = (bounds: any) => {
    var start = new Date().getTime();
    this.mapObjects.forEach(mapObject => mapObject.objects.forEach(obj => obj.setVisibility(bounds.containsPoint(obj.b))));
    console.log("updateVisibility", new Date().getTime() - start);
  }

  /**
   * Get the user's coordinates, using the gps permission.
   * @param cb Callback function to return the coordinates asynchronously.
   */
  fetchCoords(cb: (lat: number, lng: number) => void) {
    var start = new Date().getTime();
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(
      (position: Position) => {
        cb(47.37666, 8.5389);
        // cb(position.coords.latitude, position.coords.longitude);
      },
      (error: PositionError) => console.log(error),
      { timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 }
    );
    console.log("fetchCoords", new Date().getTime() - start);
  }

  /**
   * Marks all layers, that are defined in the layers array.
   */
  markLayers() {
    var start = new Date().getTime();
    this.layers.forEach(layer => {
      var layerConfig = this.mapStyle.extractConfig([layer.id]);
      var draw = this.U.accessProperty(layer.id, layerConfig.layers).draw;
      draw[draw["polygons"] ? "polygons" : "lines"].color = layer.color;
      this.mapStyle.mergeConfig(layerConfig);
    });
    console.log("markLayers", new Date().getTime() - start);
  }
}
