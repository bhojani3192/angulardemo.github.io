import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EagerService {

  private _randomNo = ''
  sharedValue:string = "";

  constructor() {
    console.log("shared service Initialise");
    this.sharedValue = 'App:' + Math.round(Math.random()* 100);
    console.log(this.sharedValue);
    console.log("Injectservice");
    this._randomNo = 'App' + Math.floor(Math.random()*1000 +1)
   }

   public getSharedValue(){
    return this.sharedValue
   }

   
   get RandomNo(){
    return this._randomNo
   }
}
