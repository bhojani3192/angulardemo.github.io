import { Injectable } from '@angular/core';
import { Router ,CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree, CanActivateChild , CanLoad, Route } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgurdService  implements  CanActivate, CanActivateChild, CanLoad  {



  constructor(private router:Router, private authService:AuthService) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean | UrlTree{

    console.log("canActivate On" + route.url);
    
    if(!this.authService.isUserLoggedIn()){
      alert("you are not allowed to view this page. You are redirected to login page")
      this.router.navigate(["login"],{queryParams:{retUrl: route.url}});
      return false;
    }

    return true;
  }


  canActivateChild(route: ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean|UrlTree{
    if(!this.authService.isAdminUser()){
      alert("You are not allowed to view this page");
      return false;
    }

    return true;
  }


  canLoad(route:Route):boolean{

    const url = route.path
    console.log('url' + url);

    if(url=='admin'){
      alert("You are not authorised to visit this page");
      return false;
    }

    return true;
    
  }

}
