import { Injectable, ElementRef } from '@angular/core';
import { UtilService } from './util.service';

declare var H: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: any;
  mapElement: ElementRef;
  mapStyle: any;

  layers: { id: string, color: string }[] = [
    { id: "landuse.golf", color: "#5555FF" },
    { id: "water", color: "#FFAAAA" },
    { id: "landuse.forest", color: "#00AA00" }
  ];

  constructor(private U: UtilService) { }

  setMap(h: any) {
    if (this.map) this.map = null;
    this.map = h;
    return this.map;
  }

  resetMap(lat, lng) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position: Position) => {
          lat = position.coords.latitude;
          lng = position.coords.longitude;
          let platform = new H.service.Platform({
            "apiKey": "wMf9ma7exbMTZgkYuj1alATsY2ae9fYC5dq9S2JeM04",
            "app_id": "qAMCTJGPeltVqBKe46Eh",
            "app_code": "c3REcMU3S-XYbmBR94s8wA"
          });
          let defaultLayers = platform.createDefaultLayers();
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

          var changeListener = (evt) => {
            if (this.mapStyle.getState() === H.map.Style.State.READY) {
              this.mapStyle.removeEventListener('change', changeListener);
              this.markLayers();
            }
          };
          this.mapStyle.addEventListener('change', changeListener);
        },
        (error: PositionError) => console.log(error),
        { timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 }
      );
    }
  }

  markLayers() {
    this.layers.forEach(layer => {
      var layerConfig = this.mapStyle.extractConfig([layer.id]);
      var draw = this.accessProperty(layer.id, layerConfig.layers).draw;
      draw[draw["polygons"] ? "polygons" : "lines"].color = layer.color;
      this.mapStyle.mergeConfig(layerConfig);
    });
  }

  accessProperty(id: string, res: any) {
    var properties = id.split(".").reverse();

    while (properties.length > 0) res = res[properties.pop()];

    return res;
  }
}
