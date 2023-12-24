import { AbstractControl, ValidationErrors, ValidatorFn, Validator, NG_VALIDATORS, FormControl  } from "@angular/forms";
import { GteService } from "./gte.service";
import { Directive, OnInit, forwardRef, Input, Injector } from '@angular/core';
import { gteValidatorDirective } from "../../templateform/tempcustomvalid/gte.validator";
import { Observable, of , pipe } from 'rxjs';
import { map , debounceTime } from "rxjs";




export function gte(control:AbstractControl):Observable<ValidationErrors> | null{
  
        let  injector = Injector.create([{provide: GteService , useClass:GteService,deps:[]}])
        let  service =  injector.get(GteService)

        const v:number =+ control.value;
        console.log(v);
        
        // if(!service.gte(v,val)){
        //     return {'gte':true, 'requiredValue':val}
        // }
     
        if(isNaN(v)){
            return of ({'gte':true, 'requiredValue':10})
        }
    
        if(v<=+10){
            return of ({'gte': true, 'requiredValue':10})
        }   
    



        return null

} 


 
// export function validate(control:AbstractControl):Observable<ValidationErrors> | null{

//     const value:string = control.value

//     return this.http.get(this.baseURL + 'checkIfValid?value=' + value)

//         .pipe(
//             debounceTime(500),
//             map((data:any) => {
//                 if(!data.isValid) return ({'Invalid': true})
//             })
//         ) 

// }


