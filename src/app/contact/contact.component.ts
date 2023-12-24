import { Component, OnInit , ViewEncapsulation, ViewChild ,ElementRef  } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactService } from './contact.service';
import { Contactinfo } from './contactinfo';
import { contact } from '../form/templateform/contact';
import { groupBy } from 'rxjs/internal/operators/groupBy';


interface countrycode{
  value:number;
  viewValue:number;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContactComponent implements OnInit {


cssVar: string = 'form_field_row'
cssArray = ['firstname' , 'contact_field'] 



contactForm:any = this.formBuilder.group({
  firstname: ['',[Validators.required,Validators.maxLength(20), Validators.pattern("^[a-z A-Z]+$")]],
  lastname: new FormControl('',[Validators.required,Validators.maxLength(20), Validators.pattern("^[a-z A-Z]+$")]),
  email: new FormControl('',[ Validators.email ,Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  countrycode: new FormControl ('', Validators.required),
  phonenumber: new FormControl('',[ Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("^[0-9]+$")]),
  message: new FormControl('',),
})

onSubmit(){
  console.log(this.contactForm.value);  
}


ngOnInit(): void {
  // this.setDefault()
  // this.setFirstname()
 
  this.setCode()
  // this.removeControl()
  
}
setDefault(){
  let contactinfo = {
    firstname:"David",
    lastname:"warner",
    email:"daivdw@gmail.com",
    gender:"male",
    isMarried:true,
    country:"4",
    address:{city:"Melbourn",street:"stark tower",pincode:"454545"}
  }

  this.contactForm.setValue(contactinfo)
}

setCode(){
  this.contactForm.get("countrycode").setValue(1)
}

removeControl() {
  this.contactForm.removeControl("firstname");
}
 


get firstname(){
return this.contactForm.get('firstname');
}
get lastname(){
  return this.contactForm.get('lastname');
}
get email(){
  return this.contactForm.get('email');
}
get countrycode(){
  return this.contactForm.get('countrycode');
}
get phonenumber(){
  return this.contactForm.get('phonenumber');
}
get message(){
  return this.contactForm.get('message');
}


cntmsgs: any[] = [];
contactService;
// contactinfos: Contactinfo[] = []

  constructor(private formBuilder: FormBuilder) {
   this.contactService=new ContactService();
   }

  getcntmsgs(){
    this.cntmsgs = this.contactService.getcntmsgs();
  }

  countrycodes: countrycode[] = [
    {value: +91, viewValue: +91},
    {value: +64, viewValue: +64},
    {value: +1, viewValue: +1},
    {value: +2, viewValue: +2},
  ]

  // firstName : any;
  // lastName : any;
  

  // firstNameChanged(arg:any){
  //   console.log(
  //     "firstNameChanged argument" + arg + "component" + this.firstName
  //   );
  // }

  // lastNameChanged(arg:any){
  //   console.log(
  //     "lastNameChanged argument" +arg + "component" + this.lastName
  //   );
    
  // }

  // country1Changed(arg:any){
  //   console.log("country1Changed " + arg.target.value);
  //   console.log(arg);
  // }
  

  title:string ='Contact Us';


  contactinfos: Contactinfo[] = [
    {contactNo:1234567890, emailid:'travelworld@gmail.com', address:'New York, USA'},
  ]


}