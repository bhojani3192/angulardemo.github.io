import { Injectable } from '@angular/core';
import { Router, CanActivate , ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService {

  constructor(private _router:Router) {
  
}

canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
  
  console.log("canActivate");
  alert("You are Not allowd to view this page You are redirect to Home");

  this._router.navigate([''])
  return false

 }



}