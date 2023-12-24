import { Component, OnInit , ContentChild, ElementRef, Renderer2,ContentChildren ,ViewChild} from '@angular/core';
import { ChildContentComponent } from './child-content/child-content.component';

@Component({
  selector: 'app-contentchild',
  templateUrl: './contentchild.component.html',
  styleUrls: ['./contentchild.component.scss']
})
export class ContentchildComponent implements OnInit {

  message:any;

  @ViewChild(ChildContentComponent) viewChild?:ChildContentComponent;
  
  @ContentChild("header") cardContentHeader?:ElementRef;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log('parentComponent ===> ngOnChanges');
  }
  ngDoCheck(){
    console.log('parentComponent ===> ngDoCheck');
  }
  ngAfterContentInit(){
    this.renderer.setStyle(this.cardContentHeader?.nativeElement,"font-size", "20px !important");
    console.log('AppComponent==>ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('parentComponent==>ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('parentComponent==>AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('parentComponent==>AfterViewChecked');
    this.message = this.viewChild?.message
  }



}


