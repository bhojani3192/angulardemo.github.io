import { Component, OnInit } from '@angular/core';
import { item } from './item';
import { Observable } from 'rxjs';
import { CurrencyPipe, KeyValue } from '@angular/common';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})


export class SwitchComponent implements OnInit {

  num: number = 0;
  one:any;
  two:any;
  title: string  = 'Ng if Example';
  showMe:boolean = false;
  status:any;
  customdir:string = 'custom directive angular'
  show:boolean = false;
  pipe:string = 'Pipe'
  numbers = [1,2,3,4,5,6,7,8,9,10];
  value:number = 1;
  size:number = 24;
  color:string = 'red';
  toDate: Date = new Date();
  msg:string = 'Angular Pipe' ;
  numPipe:number = 9542.14554;
  per: number= .74142;
  cur:number=124;
  custompipe:string="Custom Pipe";
  celsius: number = 0;
  Fahrenheit: number = 0;   


  items: item[] = [{name:'one', val: 1},{name:'two', val: 2},{name:'three', val: 3},{name:'four', val: 3},{name:'five', val: 3},{name:'six', val: 3}]

  selectedvalue1:string = 'one';
  selectedvalue2:string = 'one';
  selectedvalue3:string = 'one';
  selectedvalue4:string =  'one';
 
  styleClass: StyleClass = new StyleClass();

  obj = {
    c: 123,
    b:456,
    a:789
  }

  mapObj = new Map([
    ['c', 123],
    ['b', 456],
    ['a', 789],
  ])


  //  obj = [
  //     { key:a, value:789 },
  //     { key:b, value:446 },
  //     { key:c, value:123 },
  //   ];
  // compareFn:any (a:KeyValue , b:KeyValue) => number


  orderOriginal = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0
  }

  orderbyValueAsc = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return a.value > b.value ? -1 : (a.value > b.value) ? 0 : 1  
 }
  
 orderbyValueDsc = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
   return a.value > b.value ? 1 : (a.value > b.value) ? 0 : -1  
 }

 orderClause = (a: KeyValue<number,[string]>, b: KeyValue<number,[string]>): number => {
  return a.value.length > b.value.length ? -1 : (a.value.length > b.value.length) ? 0 : 1  
}

 
    toorPrice:number=  14999;
    discountamt:any = this.toorPrice*10/100;

  // this.discountamt = this.currencyPipe.transform(this.discountamt);
  // constructor(private  currencyPipe : CurrencyPipe) {
  //  }

  
  obsValue = new Observable((observer) => {
    console.log("Observable starts")
    setTimeout(() => { 
      console.log("Returns value")
      observer.next("1000") 
    }, 5000);
  });








  





  ngOnInit(): void {

  }

}


class StyleClass{
  'color' : string = 'blue';
  'font-size.px':number = 48  ;
  'font-weight':string = 'bold';
}