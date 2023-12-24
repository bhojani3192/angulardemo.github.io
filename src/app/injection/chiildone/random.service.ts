import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  private _randomNo:any = 0;

  constructor() {
    console.log("RandomService  constructed");
    this._randomNo = 'App' + Math.floor(Math.random()*1000 +1)
   }

   get RandomNo(){
    return this._randomNo
   }


}
