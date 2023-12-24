import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable,of,delay,map, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:any = Product

  constructor() { 
  
  }



  getProducts(){
    let products: Product[]

    products = [
      new Product (1,"Bat", 30000),
      new Product (2, "Stumps", 80000),
      new Product (3, "Ball" , 2000),
      new Product (4, "Gloves" , 800)
    ]

    return products;
    
  }

  getProduct(productid:number){
   let products: Product[] =   this.getProducts()
   return  products.find(p => p.productid == productid)
  }



}
