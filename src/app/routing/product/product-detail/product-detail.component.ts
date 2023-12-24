import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService} from '../product.service';
import  {Product} from '../product'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:any = Product;
  id:any;
  id1:any
  products:any

  constructor( private _ActivatedRoute: ActivatedRoute,private _router:Router, private _productService:ProductService) { 

  }

  sub:any;
  ngOnInit(): void {





    // snapshot
  //  this.id = this._ActivatedRoute.snapshot.params['id'];
  //  let products = this._productService.getProducts();
  //  this.product = products.find((p)=> p.productid == this.id)



    // this.sub = this._ActivatedRoute.paramMap.subscribe((params)=>{
    //   console.log(params);
    //   this.id = params.get('id')
    //   let products  = this._productService.getProducts();
    //   this.product = products.find((p)=> p.productid == this.id)
    // })



    this.sub = this._ActivatedRoute.params.subscribe((params)=>{
     this.id = params['id'];
     let products = this._productService.getProducts();
     this.product = products.find((p)=> p.productid == this.id)
    })


    this._ActivatedRoute.paramMap.subscribe((data)=>{
      this.id1 = data.get('id1');
      this.product = this._productService.getProduct(this.id1)
    })

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onBack(){
    this._router.navigate(['product'],{ skipLocationChange: true })
  }


}
