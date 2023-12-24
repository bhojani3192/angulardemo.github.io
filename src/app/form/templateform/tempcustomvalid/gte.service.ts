import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GteService {

  gte(num:any , requiredValue:number): Boolean  {

    if(isNaN(num)){
        return false;
    }

    if(num>= + requiredValue){
      return false;
    }

    return true;
  }

  constructor() { }
}
