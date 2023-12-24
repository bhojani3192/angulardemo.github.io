import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-productspec',
  templateUrl: './productspec.component.html',
  styleUrls: ['./productspec.component.scss']
})
export class ProductspecComponent implements OnInit {

  product:any = Product;
  id:any;
  sub:any

  constructor(private _router: Router, private _Activatedroute:ActivatedRoute , private _productService:ProductService) { }

  ngOnInit(): void {

    this.sub = this._Activatedroute.parent?.params.subscribe((params)=>{
      this.id = params['id'];
      let products =  this._productService.getProducts();
      this.product = products.find((p)=> p.productid == this.id)
    })

  }

}
