import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {

  btnClicked($event:any){
    console.log($event);
    alert("button Clicked")
  }


  
  constructor() { }

  ngOnInit(): void {
  }



}


