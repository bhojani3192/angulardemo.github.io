import { Injectable } from '@angular/core';
import { loginmsg } from './loginmsg';
import {Observable} from 'rxjs';
import {of} from 'rxjs'
 
@Injectable({
  providedIn: 'root'
})
export class LoginmsgService {

  constructor() { 
  }

  public getloginmsgs(){
    let loginmsgs:loginmsg[];

    loginmsgs = [
      new loginmsg ("Login Done")
    ]

  return loginmsgs

  }



}
