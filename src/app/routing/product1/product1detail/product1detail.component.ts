import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/angularservice/product';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-product1detail',
  templateUrl: './product1detail.component.html',
  styleUrls: ['./product1detail.component.scss']
})
export class Product1detailComponent implements OnInit {

  product:any = Product

  constructor(private _Activatedroute: ActivatedRoute , private _router: Router, private _productService: ProductService ) {

    let id= this._Activatedroute.snapshot.params['id'];
    console.log(id);

    //  this._productService.getProduct(id).subscribe((data:any)=>{
    //   this.product= data
    //   console.log(this.product);
      
    // })
  
    
   }

  ngOnInit(): void {
    
  }

}
