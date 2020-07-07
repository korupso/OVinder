import { Component, OnInit, HostListener } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  lat: number;
  lng: number;

  constructor(private mapService: MapService) { }

  public ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(this.lat, this.lng);
        },
        (error: PositionError) => {
          console.log(error);
        },
        { timeout: 30000, enableHighAccuracy: true, maximumAge: 75000 }
      );
    }
  }

  @HostListener("window:resize", ["$event"])
  public onResize(event?) {
    console.log(event);
    this.mapService.resetMap(this.lat, this.lng);
  }
}
