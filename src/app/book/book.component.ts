import { Component, OnInit, Input , Output , EventEmitter , ViewEncapsulation , ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PromocodeService } from './promocode.service';
import { ToordiscountService } from './toordiscount.service';
import { DatePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],   
})
export class BookComponent implements OnInit {

  discount = "Discount"
  flag:boolean=false
  isDisabled =true;
  showMe:boolean = false;


  bookingForm = new FormGroup ({
    promocode : new FormControl ( '', [Validators.required, Validators.minLength(7),Validators.maxLength(7)])
  })

  get promocode(){
    return this.bookingForm.get('promocode')
  }


    dollarsign:any [] = [];
    promomsgs: any [] = [];
    toordiscountmsgs: any [] = [];
    PromocodeService;
    ToordiscountService;

  

    toDate =  this.datePipe.transform(new Date(), 'dd/MM/yy HH:mm');

   
   
    constructor(private datePipe:DatePipe ){
      this.PromocodeService = new PromocodeService();
      this.ToordiscountService = new ToordiscountService();

      
  } 
    
  getfinaldict(){
    this.dollarsign = this.ToordiscountService.getfinaldisct();
    } 
  
  getpromomsg(){
    this.toordiscountmsgs = this.ToordiscountService.getpromomsg();
    this.promomsgs = this.PromocodeService.getpromomsg();
  }

  counter : number = 5;
 


  countChangedHandler(count: number){
    this.counter = count;
    console.log(count);
  }

  

  // @ViewChild(BookchildComponent) child: BookchildComponent;


  // increment(){
  //     this.child.increment();
  // }


  // decrement(){
  //   this.child.decrement();
  // }


  cssClass = {
    blue_btn:true
  }

  numbers = [1,2,3,4,5,6,7,8,9,10];

  getClass(num:number){
    if (num <= 1) return 'active';
    else return 'deactive';
  }
 

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
  decrement(){
    this.count--;
    this.countChange.emit(this.count)
  }
 
 
  multiply(){
    this.totalToorprice = this.count * this.toorPrice;
    this.discountamt = this.totalToorprice *10/100;
    this.totalamt = this.totalToorprice-this.discountamt

    // this.toordiscountmsgs =  this.ToordiscountService.getpromomsg();


    this.countChange.emit(this.totalToorprice);
    this.countChange.emit(this.discountamt);
    this.countChange.emit(this.totalamt)
  }

  

  value="";
  clearValue() {
    this.value="";
  }
  
  onSubmit(){
    console.log(this.bookingForm.value);
  }


  ngOnInit(): void {
    
  }


}
