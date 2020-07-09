import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
