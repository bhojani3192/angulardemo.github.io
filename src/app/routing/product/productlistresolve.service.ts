import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ProductService } from './product.service';
import { Observable, of } from 'rxjs';
import { Product } from './product';


@Injectable({ 
  providedIn: 'root'
})
export class ProductlistresolveService {

  // product:any = Product


  constructor(private _router:Router, private productService:ProductService) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any> | Product[] {

    console.log("ProductListResolveer is called");
    
    return this.productService.getProducts()
  }

}




// interface Resolve<T>{
//   resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<T> | Promise<T> | T
// }