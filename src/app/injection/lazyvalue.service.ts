import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyvalueService {
  private _randomNo = ''
  sharedValue:string = "";


  constructor() {
    console.log("shared service Initialise");
    this.sharedValue = 'App:' + Math.round(Math.random()* 100);
    console.log(this.sharedValue);
   }

   public getSharedValue(){
    return this.sharedValue
   }

   
   get RandomNo(){
    return this._randomNo
   }
}
