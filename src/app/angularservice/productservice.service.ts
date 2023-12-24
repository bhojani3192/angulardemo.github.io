import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Product } from './product';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class ProductserviceService {

  constructor(private loggerService:LoggerService) {

    this.loggerService.log("product service constructed");
 }

    public getProducts(){
    this.loggerService.log("getProduct Called")

    let products:Product[];

    products= [
      new Product(1,'Bat',30000),
      new Product(2,'Stumps',80000),
      new Product (3,'Ball',2000)
    ]

    this.loggerService.log(products)
    return products

    
  }





}