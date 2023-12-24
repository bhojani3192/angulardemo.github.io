import { Injectable } from '@angular/core';
import { promocode } from './promocode';

@Injectable({
  providedIn: 'root'
})
export class PromocodeService {

 
  public getpromomsg(){

    let promomsgs: promocode[];

    promomsgs = [
      new  promocode ("Promocode Discount Applied"),
    ]

    return promomsgs;
  }

  constructor() { }
}
