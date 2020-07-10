import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  loadedMarkers: {
    name: string,
    pos: {
      lat: number,
      lng: number
    }[],
    selected: boolean
  }[] = [];

  wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  accessProperty(id: string, res: any) {
    var properties = id.split(".").reverse();

    while (properties.length > 0) res = res[properties.pop()];

    return res;
  }

  getPointsFromGeoJSON(name: string, file: { type: string; geometry: { type: string; coordinates: number[]; }; properties: { adresse: string; art: string; azimut: null; distanz: null; gebpflicht: string; objectid: string; orientierung: null; }; }[]) {
    var pos: { lat: number, lng: number }[] = [];

    file.forEach(marker => {
      pos.push({ lat: marker.geometry.coordinates[1], lng: marker.geometry.coordinates[0] });
    });

    this.loadedMarkers.push({ name: name, pos: pos, selected: true });
  }
}
