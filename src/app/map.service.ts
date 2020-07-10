import { Injectable, ElementRef } from '@angular/core';
import { UtilService } from './util.service';

import parkierung_behinderte from './geoJSON/parkierung_behinderte.json';

declare var H: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: any;
  mapElement: ElementRef;
  mapStyle: any;

  layers: { id: string, color: string }[] = [];

  markerIcons: { parkierung_behinderte: string } = {
    parkierung_behinderte: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Handicapped_Accessible_sign.svg"
  };

  constructor(private U: UtilService) { }

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

          this.U.getPointsFromGeoJSON("parkierung_behinderte", parkierung_behinderte);
          this.addMarkers(this.U.loadedMarkers[0], this.markerIcons.parkierung_behinderte);
        },
        (error: PositionError) => console.log(error),
        { timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 }
      );
    }
  }

  markLayers() {
    this.layers.forEach(layer => {
      var layerConfig = this.mapStyle.extractConfig([layer.id]);
      var draw = this.U.accessProperty(layer.id, layerConfig.layers).draw;
      draw[draw["polygons"] ? "polygons" : "lines"].color = layer.color;
      this.mapStyle.mergeConfig(layerConfig);
    });
  }

  addMarkers(marker: { name: string, pos: { lat: number, lng: number }[], selected: boolean }, icon: string) {
    var markerIcon = new H.map.Icon(icon, { size: { w: 24, h: 24 } });

    marker.pos.forEach(coords => {
      this.map.addObject(new H.map.Marker(coords, { icon: markerIcon }));
    });
  }
}
