import { ValidationErrors, ValidatorFn ,AbstractControl, FormControl } from "@angular/forms";
import { Observable, of } from "rxjs";

// export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//     const name = control.get('name');
//     const alterEgo = control.get('alterEgo');
  
//     return name && alterEgo && name.value === alterEgo.value ? { identityRevealed: true } : null;
//   };


export const matchPassword:ValidatorFn = (control:AbstractControl):ValidationErrors | null => {
  
        const password = control.get('password');
        const confirm =  control.get('confirm');

        // const password = firstControl =  control.value;
        // const confirm  = secondControl= control.value; 
    
        // if(password === confirm) {
        //     return ({'noMatch': false})
        // }

        return password && confirm && password.value != confirm.value ? {'noMatch': true} : null;
   
}
