import { Injectable  , OnInit , Input , Output , EventEmitter  } from '@angular/core';
import { toordiscount } from './toordiscount';
import { dollar } from './toordiscount';
import { of } from 'rxjs';
import { CurrencyPipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class ToordiscountService {

 

    // @Input() count: number = 1;
    // @Output() countChange: EventEmitter <number> = new EventEmitter<number>();
  
    // icrement(){
    //   this.count++;
    //   this.countChange.emit(this.count)
    // }
   


    // toorPrice:number=  14999;
    // totalToorprice:number = this.toorPrice * this.count
    // discountamt:number = this.totalToorprice*10/100;
    // totalamt:number = this.totalToorprice - this.discountamt;



    toorPrice:number=  20000;


  @Input() count: number = 1;
  @Output() countChange: EventEmitter <number> = new EventEmitter<number>();

  totalToorprice:number = this.toorPrice * this.count
  discountamt:number = this.totalToorprice*10/100;
  totalamt:number = this.totalToorprice - this.discountamt;


  icrement(){
    this.count++;
    this.countChange.emit(this.count)
  }
 
 
  multiply(){
    this.totalToorprice = this.count * this.toorPrice;
    this.discountamt = this.totalToorprice *10/100;
    this.totalamt = this.totalToorprice-this.discountamt
    this.countChange.emit(this.totalToorprice);
    this.countChange.emit(this.discountamt);
    this.countChange.emit(this.totalamt)
  }



  public getfinaldisct(){
    let dollarsign : dollar[];

    dollarsign = [
      new dollar ("$"),
      new dollar (this.discountamt),
    ]

    return  dollarsign;
  }

     public getpromomsg(){
      
     let toordiscountmsgs: toordiscount[];
   
      toordiscountmsgs = [
        new toordiscount ("$"),
        new toordiscount (this.totalamt),
      ]

    return toordiscountmsgs;

  

  }


  


 



  // constructor() {
   
  //  }


}
