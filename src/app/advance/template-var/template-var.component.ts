import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-var',
  templateUrl: './template-var.component.html',
  styleUrls: ['./template-var.component.scss']
})
export class TemplateVarComponent implements OnInit {

  // address:boolean = false;
  address:any

  SayHello(firstName:any, lastName:any, address:any){
    alert('Hello ' + firstName.value + '' + lastName.value + address.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
