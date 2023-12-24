import { Component, OnInit, ViewChild,ElementRef ,ViewContainerRef,TemplateRef,AfterViewInit, Renderer2  } from '@angular/core';
import { ChildviewComponent } from './childview/childview.component';
import { NgModel } from '@angular/forms';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss'],
})
export class ViewchildComponent implements AfterViewInit {

  @ViewChild(ChildviewComponent, { static:false}) childview?:ChildviewComponent

   // @ViewChild("childview",{static:true}) childview?:ChildviewComponent;
    @ViewChild('para', {static:false}) para?:ElementRef<any>;
    @ViewChild('nameInput', {static:false}) nameVar:any;
    @ViewChild('nameInput', {static:false, read:NgModel}) inRef:any;
    @ViewChild('nameInput', {static:false, read:ElementRef}) elRef:any;
    @ViewChild('nameInput', {static:false, read:ViewContainerRef })vcRef:any;
    @ViewChild(ChildviewComponent,{read:'Token', static:false}) childviewt?:string
    @ViewChild('sayHeyTemplate', {static:false}) tempRef?:TemplateRef<any>;

    @ViewChild('hello', {static:false}) divHello?:ElementRef;
    @ViewChild('inputElement', {static:false}) inputElement?:ElementRef;
    @ViewChild('divCreateText', {static:false}) divCreateText?:ElementRef;
    @ViewChild('divNew',{static:false})divCreate?:ElementRef;
    @ViewChild('#div1',{static:false})divBefore1?:ElementRef;
    @ViewChild('div2',{static:false})div2?: ElementRef;
    @ViewChild('div3',{static:false})div3?:ElementRef;
    @ViewChild('comment', {static:false})comment?:ElementRef;
    @ViewChild('hellobtn ',{static:false}) btnHello?:ElementRef


    constructor(private renderer:Renderer2 , private el:ElementRef){
    }

    setStyle(){
      this.renderer.setStyle(this.divHello?.nativeElement,'color','blue')
    }
  
    removeStyle(){
      this.renderer.removeStyle(this.divHello?.nativeElement, 'color')
    }
  
    addClass(){
      this.renderer.addClass(this.divHello?.nativeElement, 'blackborder');
    }
  
    removeClass(){
      this.renderer.removeClass(this.divHello?.nativeElement, 'blackborder')
    }
    addAtribute(){
      this.renderer.setAttribute(this.inputElement?.nativeElement, 'value', 'Name');
    }

    removeAtribute(){
      this.renderer.removeAttribute(this.inputElement?.nativeElement, 'value')
    }

    setProperty(){
      this.renderer.setProperty(this.divHello?.nativeElement,'innerHTML', "Hey React")
    }

   
      text = this.renderer.createText('Example of Create Text')

      createText(){
       this.renderer.appendChild(this.divCreateText?.nativeElement, this.text)    
      }

      CreateElemt(){
        const div = this.renderer.createElement('div')
        const text = this.renderer.createText('Inserted at bottom')

        this.renderer.appendChild(div,text)
        this.renderer.appendChild(this.el.nativeElement, div)
      }

      CreateElmt2(){
        let divcrt = this.renderer.createElement('div')
        let text = this.renderer.createText('Inserted inside div')

        this.renderer.appendChild(divcrt,text);
        this.renderer.appendChild(this.divCreate?.nativeElement,divcrt )
      }

      insertBeforeDiv1(){
        const div =this.renderer.createElement('div');
        const text = this.renderer.createText('this text is Inserted before div1')
        this.renderer.appendChild(div,text)
        this.renderer.insertBefore(this.el.nativeElement,div,this.divBefore1?.nativeElement)
      }

      isertBeforeDiv2(){
        const div = this.renderer.createElement('div');
        const text =this.renderer.createText('this text will display before div2')
        this.renderer.appendChild(div,text)
        this.renderer.insertBefore(this.el.nativeElement,div,this.div2?.nativeElement)
        this.renderer.insertBefore(this.renderer.nextSibling(this.div2?.nativeElement),div,this.div3?.nativeElement)
      }
      isertBeforeDiv3(){
        const div = this.renderer.createElement('div');
        const text =this.renderer.createText('this text will display before div3')
        this.renderer.appendChild(div,text)
        this.renderer.insertBefore(this.renderer.parentNode(this.div3?.nativeElement),div,this.div3?.nativeElement)
      }

      exampleDiv(){
        const e = this.renderer.selectRootElement('.div1',false)
      }

      exampleDiv2(){
        const e = this.renderer.selectRootElement('.div2',false)
        const t = this.renderer.createText('content added div2')
        this.renderer.appendChild(e,t)
      }

      exampleDiv3(){
        const e = this.renderer.selectRootElement('.div3',true)
        const t = this.renderer.createText('content add div3')
        this.renderer.appendChild(e,t)
      }




      crtComment(){
        const cmt = this.renderer.createComment('data')

        this.renderer.appendChild(this.comment?.nativeElement, cmt)
      }


  showCounter:boolean = true;
  name:any;
  elemdata:any
  count = 0;
  clicklistner:any;

  increment(){
    this.childview?.increment();
  }

  decrement(){
    this.childview?.decrement()
  }

 


       // constructor(private elementRef: ElementRef) { 
  //   const s= document.createElement('script');
  //   s.type= 'text/javascript';
  //   s.textContent = 'alert("Hello word")';
  //   this.elementRef.nativeElement.appendChild(s);
  // }

  ngAfterViewInit(){
    // console.log(this.para?.nativeElement.innerHTML);
    // this.para?.nativeElement.innerHTML="new text";

    this.childview?.increment();

    this.renderer.setProperty(this.divHello?.nativeElement,'innerHTML', "Hello Angular");
    this.renderer.setStyle(this.divHello?.nativeElement,'color','red');


    this.clicklistner = this.renderer.listen(this.btnHello?.nativeElement, 'click', (evt) =>{
      this.count++;
    });

    

    // this.divHello?.nativeElement.innerHTML = "Hello Angular";
    // this.divHello.nativeElement.className="someClass";
    
    if( this.divHello == this.elemdata){
      this.elemdata.nativeElement.innerHTML = "Hello Angular";
      this.elemdata.nativeElement.className="someClass";
    }




  }




  ngOnInit(): void {
  }

}
