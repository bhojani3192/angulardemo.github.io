import { Component, OnInit , ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PymtmsgService } from '../core/services/pymtmsg.service';
import { dte } from './dte.validator';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    paymentForm= new FormGroup({
    cardname: new FormControl('',[Validators.required,Validators.maxLength(20), Validators.pattern("^[a-z A-Z]+$")]),
    cardnumber: new FormControl('',[Validators.required,Validators.maxLength(16),Validators.minLength(16),Validators.pattern("^[0-9]*$")]),
    cvv: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.pattern("^[0-9]*$")]),
    expiry: new FormControl('', [dte(2023)]),
  })
  
  get cardname() {
    return this.paymentForm.get('cardname');
  }
  get cardnumber() {
    return this.paymentForm.get('cardnumber');
  }
  get cvv() {
    return this.paymentForm.get('cvv');
  }
  get expiry() {
    return this.paymentForm.get('expiry');
  }

  
  
  onSubmit() {
    console.log(this.paymentForm.value);
    console.log ("Payment Done Successfully!👍");
    // alert("Payment Done Successfully!");
  }

 
  pymtmsgs:any[] = [];
  PymtmsgService;

  constructor(){
    this.PymtmsgService=new PymtmsgService();
 
  }

  getpymtmsgs(){
    this.pymtmsgs=this.PymtmsgService.getPymntmsgs();
  }
 

    
  ngOnInit(): void {
  }

}


