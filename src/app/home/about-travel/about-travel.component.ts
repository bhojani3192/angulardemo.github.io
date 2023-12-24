import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-travel',
  templateUrl: './about-travel.component.html',
  styleUrls: ['./about-travel.component.scss']
})
export class AboutTravelComponent implements OnInit {
   title = 'Travel.com'
  constructor() { }

  ngOnInit(): void {
  }

}
