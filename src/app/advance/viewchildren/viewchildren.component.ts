import { Component, OnInit, ViewChild,ViewChildren,QueryList,AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.scss']
})
export class ViewchildrenComponent implements OnInit {


  firstName="";
  middleName="";
  lastName="";

  showFirstName = true;
  showMiddleName = true;
  showLastName = true;

  @ViewChildren(NgModel) modelRefList?:QueryList<NgModel>;

  
  ngAfterViewInit(){
    this.modelRefList?.changes.subscribe(data =>{
      console.log(data);
      
    })
  }

  show(){
    this.modelRefList?.forEach(element => {
      console.log(element);
      
    })
  }

  constructor() { }

  ngOnInit(): void {
  }


}
