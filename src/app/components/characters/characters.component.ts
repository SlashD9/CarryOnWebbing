import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CharactersComponent implements OnInit {
  kennethWilliams = './assets/images/Kenneth_Williams.jpg';
  joanSims = './assets/images/Joan_Sims.jpg';
  charlieHawtrey = './assets/images/Charles_Hawtrey.jpg';
  sidJames = './assets/images/Sid_James.jpg';
  constructor() { }

  ngOnInit() {
  }

}
