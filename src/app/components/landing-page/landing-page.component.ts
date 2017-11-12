import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {
  image1 = './assets/images/carry_on_camping.jpg';
  image2 = './assets/images/carry_on_atYourConvenience.jpg';
  image3 = './assets/images/carry_on_Cleo.jpg';
  constructor() { }

  ngOnInit() {
  }

}
