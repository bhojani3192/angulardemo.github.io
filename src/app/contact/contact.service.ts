import { Injectable } from '@angular/core';
import { cntmsg } from './cntmsg';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public getcntmsgs(){
    let cntmsgs: cntmsg[];

    cntmsgs = [
      new cntmsg ("Message Sent Successfully")
    ]

    return cntmsgs;
  }



  constructor() { }
}
