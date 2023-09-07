import { Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-swipe-categories',
  templateUrl: './swipe-categories.component.html',
  styleUrls: ['./swipe-categories.component.scss'],
})
export class SwipeCategoriesComponent implements OnInit {
  swiperModules = [IonicSlides];

  @Input() banners: any;

  constructor() {}

  ngOnInit() {}
}
