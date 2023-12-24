import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {
  public product = {id:'1', name:"Angular"};


  

  constructor(private router:Router){

  }

  gotoDynamic(){
    this.router.navigateByUrl('dynamic', {state: this.product})
  }

  ngOnInit(): void {
   
  }

}
