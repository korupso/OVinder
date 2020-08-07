import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';

import { MapService } from '../map.service';
import { UtilService } from '../util.service';
import { partition } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private mapService: MapService, private U: UtilService, private menu: MenuController) { }

  public ngOnInit() {
    console.log(new Date().toLocaleTimeString("ch"));

    this.menu.enable(true, "settings");

    console.log(document.getElementById("menuButton").shadowRoot);
  }
}
