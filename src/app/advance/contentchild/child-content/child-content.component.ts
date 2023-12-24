import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.scss']
})
export class ChildContentComponent implements OnInit {

  message = ""

  constructor() { }

  ngOnChanges(){
    console.log('childComponent ===> ngOnChanges');
  }

  ngOnInit(){
    console.log('childComponent ===> ngOnInit');
  }

  ngDoCheck(){
    console.log('childComponent ===> ngDoCheck');
  }
  ngAfterContentInit(){
    console.log('childComponent ===> ngAfterContentInit');
  }
  
  ngAfterContentChecked(){
    console.log('childComponent ===>  ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('childComponent ===>  AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ChildComponent==>AfterViewChecked');

  }


}
