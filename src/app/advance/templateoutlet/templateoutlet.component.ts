import { Component, OnInit, ViewChild,AfterViewInit,TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templateoutlet',
  templateUrl: './templateoutlet.component.html',
  styleUrls: ['./templateoutlet.component.scss']
})
export class TemplateoutletComponent implements OnInit,AfterViewInit {

  @ViewChild('parentTemplate') myTemplate?:TemplateRef<HTMLElement>
  @ViewChild('cardTemplate') cardTemplate?:TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate?:TemplateRef<HTMLElement>

  
  constructor() {
  
  }

 ngAfterViewInit(): void {
   
 }

 ngOnInit(): void {
   // console.log(this.myTemplate);
   
 }

  mode = "card"

  items = [
    {
      header:"Angular Tutorial",
      Content: "The Angular Tutorial for Beginners & Professionals"
    },
    {
      header:"Typescript Tutorial",
      content:"The Complete Guide to Typescript"
    },
    {
      header: 'Entity Framework Code Tutorial',
      content: 'Learn Everything about Entity Framework Core'
    }
  ]


  modeOptions = [
    {mode:"card"},
    {mode:"list"}
  ]

  get template(){
    if(this.mode=="list")   return this.listTemplate
    return this.cardTemplate
  }




}
