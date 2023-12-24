import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, Event as  NavigationEvent } from '@angular/router';
import {filter} from 'rxjs'
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

  product:any

  constructor(private router:Router, private activatedRoute:ActivatedRoute) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
    
   }

  ngOnInit(): void {
    this.product = history.state

    // this.router.events.subscribe((event:any) :NavigationStart)=>{
    //   if(event instanceof NavigationStart){
    //     console.log(event);
        
    //   }
    // }

  }

 

}
