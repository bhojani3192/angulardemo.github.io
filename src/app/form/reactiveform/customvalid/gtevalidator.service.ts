import { Injectable , Directive , OnInit, forwardRef ,  Input} from '@angular/core';
import { AbstractControl,ValidationErrors,ValidatorFn,Validator,NG_VALIDATORS,FormControl } from '@angular/forms'; 
import { GteService } from './gte.service';

@Injectable({
  providedIn: 'root'
})
export class GtevalidatorService {

  constructor(private gteService:GteService) { }

   gte(val:number): ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
        let v:number =+ control.value
        if(!this.gteService.gte(v,val)){
          return {'gte': true, 'requiredValue': val}
        }
        
    return null
    }
   }
}
