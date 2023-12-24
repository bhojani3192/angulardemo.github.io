import { Validator, NG_VALIDATORS,FormControl, AbstractControl, ValidationErrors } from "@angular/forms";
import { Directive, OnInit, forwardRef,Input } from '@angular/core';
import { GteService } from "./gte.service";

@Directive({
    selector: '[gteValidator]',
    providers: [ 
        {provide:NG_VALIDATORS, useExisting: gteValidatorDirective , multi:true}
     ]
})


export class gteValidatorDirective implements Validator, OnInit{


    
    ngOnInit(): void {
    }

    @Input('gteNum') gteNum:any

    constructor(private gteService: GteService ){

    }


     validate(control: AbstractControl) : ValidationErrors | null {
       
        let v: number =  + control.value

        // if(isNaN(v)){
        //     return {'gte':true, 'requiredValue':this.gteNum}
        // }   

        // if(v<= + this.gteNum){
        //     return {'gte':true, 'requiredValue':this.gteNum}
        // }

        if(this.gteService.gte(v,this.gteNum)){
            return {'gte':true, 'requiredValue': this.gteNum}
        }

        return null

    }
}