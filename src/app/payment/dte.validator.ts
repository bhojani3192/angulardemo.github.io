import { AbstractControl, ValidationErrors  ,ValidatorFn } from "@angular/forms";


export function dte(date:any): ValidatorFn{

    return(control:AbstractControl ) : ValidationErrors | null  =>{

        let d:any  =+  control.value

        if(d<=+date){
            return {'dte': true , 'requiredValue' : date>=+2023 }
        }

        
        return null;

    }

}