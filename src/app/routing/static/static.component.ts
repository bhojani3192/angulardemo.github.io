import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {Observable} from 'rxjs'

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {
  product:any;
  data:any
 

  constructor(private activatedRoute:ActivatedRoute){
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=>{
      this.product.data
      console.log(this.product.data);
      
    })
  }


}
