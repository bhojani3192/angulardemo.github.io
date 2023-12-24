import { Component, OnInit,Input, SimpleChanges, SimpleChange, OnChanges, ChangeDetectionStrategy,DoCheck , KeyValueDiffers } from '@angular/core';
import { Customer } from '../child/customer'; 

@Component({
  selector: 'app-lifechild',
  templateUrl: './lifechild.component.html',
  styleUrls: ['./lifechild.component.scss']
})
export class LifechildComponent implements OnChanges , DoCheck , OnInit  {

  @Input() message:string = "";
  @Input() name:string = "";
  @Input() customer = new  Customer();
  changelog: string[] = [];
  oldCustomer: Customer = new Customer();
  DocheckCount = 0;
  differ:any;


  
  constructor(private differs: KeyValueDiffers) {
 
  }

  ngOnInit(): void {
    console.log("lifechild:ngOnInit");
    this.oldCustomer = Object.assign({}, this.customer)
    this.differ = this.differs.find(this.customer).create()
  }

  ngDoCheck(){
    console.log('DoCheck');
    this.DocheckCount ++;

    // if(this.oldCustomer.name !== this.customer.name || this.oldCustomer.code !==this.customer.code){
    //     const to = JSON.stringify(this.customer);
    //     const from = JSON.stringify(this.oldCustomer);
    //     const changeLog = `DoCheck customer: changed from ${from} to ${to}`;
    //     this.changelog.push(changeLog);

    //     this.oldCustomer = Object.assign({}, this.customer)
    // }

    const customerChanges = this.differ.diff(this.customer)
    
    
    if(customerChanges){
      console.log("customer changes");
      customerChanges.forEachChangedItem((r:any) => this.changelog.push('changed' + r.key + '' + JSON.stringify(r.currentValue)))
      customerChanges.forEachAddedItem((r:any)=> this.changelog.push('added' + r.key + '' + JSON.stringify(r.currentValue)));
      customerChanges.forEachRemovedItem((r:any) => this.changelog.push('removed' + r.key + '' + JSON.stringify(r.currentValue)))
    }
    
  }
 

  ngOnChanges(changes: SimpleChanges){
    console.log("OnChanges");
    console.log(JSON.stringify(changes));

    for (const propName in changes){
      const change = changes[propName];
      const to = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const changeLog = `${propName}: changed from ${from } to ${to}`;
      this.changelog.push(changeLog);
    } 
    
  }



  ngOnDestory(){
    console.log("lifechild:destory");
  }


}
