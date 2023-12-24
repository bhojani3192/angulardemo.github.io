import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { switchMap,of } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:any 
  id:any
  product:any
  pageNo:any;
  snapshotPageNo:any;

  pageNum=0;
  sort:any
  sort1:any
  fragment:any

  title = "QueryParameter"

 

  constructor(private productService :ProductService , private ActivatedRoute: ActivatedRoute ,private router:Router){
   
  }


  ngOnInit(): void {
    this.products = this.productService.getProducts()

    this.snapshotPageNo =  this.ActivatedRoute.snapshot.queryParamMap.get('pageNum') || 0;

    this.ActivatedRoute.queryParamMap.subscribe((params)=>{
      this.pageNo =  params.get('pageNum') || 0;
      console.log("queryparams", this.pageNo);
      
    })

    // this.ActivatedRoute.paramMap.subscribe(params =>{
    //   this.productService.getProduct(+ params.get('productid'))
    // }).subscribe((product:Product)=> this.product= product)

    this.ActivatedRoute.paramMap
    .pipe(
      switchMap((params:Params)=>{
        return  of  (this.productService.getProduct(params['get']('id')))
      } ))
      .subscribe((product?:Product) => this.product = product)


    // this.ActivatedRoute.queryParamMap.subscribe((data)=>{
    //   this.sort = data.get('sort')
    // })

    // this.ActivatedRoute.fragment.subscribe((data)=>{
    //   this.fragment = data
    // })

    
    this.sort= this.ActivatedRoute.snapshot.queryParams["sort"]

    this.fragment = this.ActivatedRoute.snapshot.fragment



    this.products = this.productService.getProducts()




  }

  nextPage(){
    this.router.navigate(['product'],{
      queryParams: {pageNum: this.pageNo++}
    })
  }



}
