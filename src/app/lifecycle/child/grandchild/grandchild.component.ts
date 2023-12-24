import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent implements OnInit {

  @Input() customer:Customer = new Customer()

  constructor() {
    console.log("Grandchild:constructed");
    
   }

  ngOnInit(): void {
    console.log("Grandchild:oninit");
  }

  ngOnChanges(){
    console.log("Grandchild:ngOnChanges");
  }
  ngAfterViewChecked(){
    console.log("Grandchild:ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("GrandChild:ngOnDestroy");
  }

  ngDoCheck() {
    console.log("GrandChild:DoCheck");
  }
 
  ngAfterContentInit() {
    console.log("GrandChild:ngAfterContentInit");
  }
  ngAfterViewInit() {
    console.log("GrandChild:AfterViewInit");
  }
 


}
