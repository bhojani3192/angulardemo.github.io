import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private  isloggedIn: boolean = false;
  private  userName:string="";


  constructor() { 
    this.isloggedIn = false;
  }

  login(username:string, password:string){
    this.isloggedIn = true;
    this.userName = username;
    return of (this.isloggedIn)
  }
   
  isUserLoggedIn():boolean{
    return this.isloggedIn;
  }


  isAdminUser():boolean{
    if(this.userName == 'admin@gmail.com'){
      return true;
    }

    return false;
  }


  logoutUser(){
    this.isloggedIn = false;
  }

}
