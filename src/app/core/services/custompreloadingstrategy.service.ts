import { Injectable } from '@angular/core';
import  {Observable, of, timer } from 'rxjs';
import {flatMap} from 'rxjs/operators';
import { PreloadingStrategy, Route } from '@angular/router';
import { flush } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class CustompreloadingstrategyService implements PreloadingStrategy {

  preload(route:Route, loadMe: () => Observable <any>):Observable<any>{
    if (route.data && route.data['preload']){
      var delay:number=route.data['delay']
      console.log("pre load called on" + route.path +' delay is ' + delay);
      
      return timer(delay).pipe(flatMap(_ => {
        console.log("loading now" + route.path);
          return loadMe();
      }))
    }else{
      console.log('No preload for the path' + route.path);
      return of(null)
    }

  }

  constructor() { }
}
