import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Element } from '@angular/compiler';
import { ObjectUnsubscribedError } from 'rxjs';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  exportAs:'customerList'
})
export class CustomerListComponent implements OnInit {


  customers: Customer[] = [
    {customerNo: 1 ,name:"Rahul", address:"", city:"Banglore", state:"Karnataka", country:"India"},
    {customerNo: 2 ,name:"Rohit", address:"", city:"Mumbai", state:"Maharashtra", country:"India"},
    {customerNo: 3 ,name:"Shreyas", address:"", city:"Delhi", state:"Delhi", country:"India"},
    {customerNo: 4 ,name:"Dhoni", address:"", city:"Ranchi", state:"Bihar", country:"India"},
    {customerNo: 5 ,name:"Kohli", address:"", city:"Delhi", state:"Delhi", country:"India"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  
  selectedCustomer: Customer= new Customer()


  showDetails(customer:Customer){
    this.selectedCustomer= Object.assign({}, customer)
  }

  update(customer:Customer){
    // console.log(customer);
    var cust:any = this.customers.find(e => e.customerNo == customer.customerNo)

    console.log(cust,customer);
    
    Object.assign(cust ,customer)
    alert("Customer Saved")
  }

}
