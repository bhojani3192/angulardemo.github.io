import { Component, OnInit , Input , ChangeDetectionStrategy } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {

  @Input() message:string ="";
  customer:Customer = new Customer()


 constructor() { 
     console.log("child : constructed");
  }

  ngOnChanges(){
    console.log("child: ngOnchange");
    
  }

  ngOnInit(): void {
    console.log("child : ngOninit");
  }

  ngDoCheck() {
    console.log("child:DoCheck");
  }
 
  ngAfterContentInit() {
    console.log("child:ngAfterContentInit");
  }
 
  ngAfterContentChecked() {
    console.log("child:AfterContentChecked");
  }
 
  ngAfterViewInit() {
    console.log("child:AfterViewInit");
  }
 
  ngAfterViewChecked() {
    console.log("child:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("child:ngOnDestroy");
  }



}
