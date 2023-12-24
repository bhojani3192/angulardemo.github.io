import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector:'[appHighLight]',
})

export class HighLightDirective implements OnInit{

    @HostBinding('style.border') border:string = "";
    // @HostBinding('class') class:string="";
    // @HostBinding('class') get class() {return "highlight box"};
    @HostBinding('class.highlight') get hasHighlight(){return true}
    @HostBinding('class.box') get hasBox() {return false}


    ngOnInit(): void {
        // this.border= "5px solid blue"
        // this.class="highlight box"
    }

    @HostListener('mouseover')
        onMouseOver(){
            this.border= '5px solid green'
            console.log("mouseover");
        }
    
    @HostListener('mouseleave')
        onMouseLeave(){
            this.border="";
            console.log("Mouse Leave");
        }
    

}