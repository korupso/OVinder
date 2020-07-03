import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
  selector: 'here-map',
  templateUrl: 'here-map.component.html'
})
export class HereMapComponent implements OnInit {

  @ViewChild("map")
  public mapElement: ElementRef;

  @Input()
  public apiKey: String;

  @Input()
  public appId: string;

  @Input()
  public appCode: string;

  @Input()
  public lat: number;

  @Input()
  public lng: number;

  public constructor() { }

  public ngOnInit() { }

  public ngAfterViewInit() {
    let platform = new H.service.Platform({
      "apiKey": this.apiKey,
      "app_id": this.appId,
      "app_code": this.appCode
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
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  }

}