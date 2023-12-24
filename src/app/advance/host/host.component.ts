import { Component, OnInit,HostBinding,HostListener } from '@angular/core';


@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  @HostBinding('class.highlight') get hasHighlight() {return true}
  @HostBinding('class.box') get hasBox(){return true}


  constructor() { }

  ngOnInit(): void {
  }

}
