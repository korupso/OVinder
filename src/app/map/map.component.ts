import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var H: any;

@Component({
  selector: 'here-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild("map")
  public mapElement: ElementRef;

  public appId: string = "tj6HN2yVKnspSKiI2ozO";

  public apikey: string = "wMf9ma7exbMTZgkYuj1alATsY2ae9fYC5dq9S2JeM04";

  public lat: number = 47.3536713;

  public lng: number = 8.7217896;

  public constructor() { }

  public ngOnInit() { }

  public ngAfterViewInit() {
    let platform = new H.service.Platform({
      "app_id": this.appId,
      "apikey": this.apikey
    });
    let defaultLayers = platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.raster.normal.map,
      {
        zoom: 10,
        center: { lat: this.lat, lng: this.lng }
      }
    );
  }

}
