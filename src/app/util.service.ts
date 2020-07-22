import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  /**
   * Accesses a nested property.
   * @param id The point delimited string of properties.
   * @param res The property itself.
   */
  accessProperty(id: string, res: any) {
    var properties = id.split(".").reverse();

    while (properties.length > 0) res = res[properties.pop()];

    return res;
  }
}
