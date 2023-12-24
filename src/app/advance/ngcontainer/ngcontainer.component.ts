import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  templateUrl: './ngcontainer.component.html',
  styleUrls: ['./ngcontainer.component.scss']
})
export class NgcontainerComponent implements OnInit {


  items = [
    {name:'Angular', active:true},
    {name:'React', active:true},
    {name:'TypeScript', active:true},
    {name:'FoxPro', active:false},
    {name:'Javascript', active:true},
    {name:'ASP.NET core', active:false},
    {name:'DBase', active:false},
  ]

  items1=[
    {name:'PC'},
    {name:'Leptop'},
    {name:'Mobile'}
  ]
value= 1
loading:any

  constructor() { }

  ngOnInit(): void {
  }

}
