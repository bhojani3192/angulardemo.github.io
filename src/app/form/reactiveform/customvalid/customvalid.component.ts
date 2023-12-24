import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl ,FormGroupName } from '@angular/forms';
import { gte } from './gte.validator';
import { GtevalidatorService } from './gtevalidator.service';

@Component({
  selector: 'app-customvalid',
  templateUrl: './customvalid.component.html',
  styleUrls: ['./customvalid.component.scss']
})
export class CustomvalidComponent implements OnInit {

  constructor(private gteValidation : GtevalidatorService) { }
  // constructor(){}

  demoForm = new FormGroup({
    // numVal: new FormControl('' ,[gte])
    numVal: new FormControl ('', [this.gteValidation.gte(10)])
  })


  get numVal(){
    return this.demoForm.get('numVal')
  }



  onSubmit(){
    console.log(this.demoForm.value);
    
  }







  ngOnInit(): void {
  }

}
