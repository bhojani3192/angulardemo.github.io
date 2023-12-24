import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../lifecycle/child/customer';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }

}
