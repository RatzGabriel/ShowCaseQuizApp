import { Component, OnInit } from '@angular/core';
import { constants } from '../../../db/constants';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  gamename: any = '';

  constructor() {}

  ngOnInit() {
    this.gamename = constants.game1.name;
  }
}
