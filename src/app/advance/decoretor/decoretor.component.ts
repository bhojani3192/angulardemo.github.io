import { Version } from '@angular/compiler';
import { Component, OnInit, VERSION } from '@angular/core';

@simpleDecorator({
  value1:'100',
  value2:'200'
})

@Component({
  selector: 'app-decoretor',
  templateUrl: './decoretor.component.html',
  styleUrls: ['./decoretor.component.scss']
})
export class DecoretorComponent implements OnInit {
  name = 'Angular' + VERSION.major

  constructor() { 
    console.log("Hello from class constructor");
    
  }

  ngOnInit(): void {
    console.log((this as any).value1);
    console.log((this as any).value2);
    
  }

}


function simpleDecorator(args:any){
  console.log(args);
  
  return function(target:any){
    console.log("Hello from Decorator");
    console.log(typeof target);
    console.log(target);
    
    

    Object.defineProperty(target.prototype, 'value1',{
      value: 100,
      writable:false
    })
    
    Object.defineProperty(target.prototype, 'value2',{
      value:200,
      writable:false
    })
  }
 

}