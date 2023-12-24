import { Injectable } from '@angular/core';
import {pymtmsg} from '../../payment/pymtmsg';


@Injectable({
  providedIn: 'root'
})
export class PymtmsgService {
 public getPymntmsgs(){
  let pymtmsgs:pymtmsg[];
 

  pymtmsgs =[
    new pymtmsg("Payment Proceced Successfully🎉")
  ]

 

  return pymtmsgs;

 }

  constructor() { }
}
