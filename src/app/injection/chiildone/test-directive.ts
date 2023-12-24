import {Directive, ElementRef, Input , OnInit ,SkipSelf , Self ,Optional,Host} from "@angular/core"
import { RandomService } from "./random.service";

@Directive({
    selector: "[testDirective]",
    providers: [RandomService]
})

export class testDirective implements OnInit{
    @Input() ttClass: string = "";

    constructor(  private el: ElementRef, @Host() private randomService: RandomService){
    }

    ngOnInit(): void {
        this.el.nativeElement.innerHTML =
        "Directive =>" + this.randomService.RandomNo
    }

}