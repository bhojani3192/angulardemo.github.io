import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.scss']
})
export class Product2Component implements OnInit {

  products:any = Product

  constructor(private route:ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {

    this.products = this.route.snapshot.data['products']


    

  }

}
