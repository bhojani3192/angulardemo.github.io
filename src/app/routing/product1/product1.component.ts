import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component implements OnInit {

  products:any = Product

  constructor( private route: ActivatedRoute, private productService:ProductService  ) { }

  ngOnInit() {
  //   this.productService.getProducts().subscribe((data:any) => {
  //     this.products=data;
  //  });

  this.products = this.productService.getProducts()
  }


}
