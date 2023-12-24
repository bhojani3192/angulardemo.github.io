import { Component, OnInit , ChangeDetectionStrategy , VERSION , OnDestroy} from '@angular/core';
import { Customer } from './child/customer';

@Component({
  selector: 'app-lifecycle',
  changeDetection:ChangeDetectionStrategy.Default,
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit  {

  name = "";
  code = 0;
  message = "";
  customer:Customer = new Customer();
  title = "ngOnchange"
  


  updateCustomer(){
    this.customer= new Customer();
    this.customer.name = this.name;
    this.customer.code = this.code;
  }


  content = "";
  hideChild = true;
  displayChild = true;
  

  toggle(){
    this.displayChild= !this.displayChild
  }


  constructor() { 
    console.log("lifecycle:constrouctor");
  }


 
  ngOnInit(): void {
    console.log("lifecycle:OnInit");
  }


 // ngOnchanges(){
  //   console.log("lifecycle:ngonchange");
  // }


  // ngDoCheck(){
  //   console.log("lifecycle:Docheck");
    
  // }

  // ngAfterContentChecked(){
  //   console.log("lifecycle:ngAfterContentChecked");
  // }

  // ngAfterViewInit(){
  //   console.log("lifecycle:ngAfterViewInit");
  // }

  // ngAfterViewChecked(){
  //   console.log("lifecycle:ngAfterViewChecked");
  // }


  ngOnDestroy(){
    console.log("lifecycle:ngOnDestroy");
  }


}
