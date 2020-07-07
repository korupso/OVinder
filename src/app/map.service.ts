import { Injectable, ElementRef } from '@angular/core';

declare var H: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: any;
  mapElement: ElementRef;

  setMap(h: any) {
    if (this.map) this.map = null;
    this.map = h;
    return this.map;
  }

  resetMap(lat, lng) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
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
        },
        (error: PositionError) => {
          console.log(error);
        },
        { timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 }
      );
    }
  }
}
