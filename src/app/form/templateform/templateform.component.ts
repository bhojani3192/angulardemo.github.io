import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { FormGroup, NgForm, FormControl,FormBuilder } from '@angular/forms';
import { contact } from './contact';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {


  //  @ViewChild('contactForm',null) contactForm: NgForm;
  @ViewChild('contactForm') contactForm:any;  
  
  @ViewChild('countryForm') countryForm:any;

  contact:any = contact

  countryList:country[] = [
    new country("1","India"),
    new country("2","Australia"),
    new country("3","USA"),
    new country("4","Uk"),
  ]

  // onSubmit(contactForm:any){
  //   console.log(contactForm.value);
  // } 

  constructor(private formbuilder: FormBuilder) {
  }

  country_name="";
  set_country="";

  countries =[
    {id:1 , name:"India"},
    {id:2, name:"Newzeland"},
    {id:3, name:"Uk"},
    {id:4, name:"Australia"}
  ]
   
  countrySubmit(){
    console.log("FormSubmit");
    console.log(this.countryForm.value);
  }
  
  onCountryChanged(value:any){
    console.log('onCountryChanged');
    console.log(value);
  }

  addCountry(){
    const country = this.countries.find(el => el.name === this.country_name);
    if(!country){
      let id= Math.max.apply(Math, this.countries.map(function(o) {return o.id}));
      this.countries.push({id:id+1, name:this.country_name});
      this.country_name="";
    }
  }

  setCountry(){
    const country = this.countries.find(el => el.name === this.set_country);
    if(country){
        this.countryForm.form.get("country").patchValue(country.id)
    }
  }
 


  ngOnInit(): void {
    this.contact = {
      firstname:"virat",
      lastname:"kohli",
      email:"vk18@gmail.com",
      gender:"male",
      isMarried:true,
      country:"2",
      address:{city:"Bangluru",street:"one eight",pincode:"180018"}
    } 

    setTimeout(() =>{
      // this.contactForm.setValue(this.contact)
      this.setDefaults();
    });


   


    setTimeout(() =>{
      this.contactForm.control.get("firstname").statusChanges.subscribe((newStatus:any) =>{
        console.log("fistname status change");
        console.log(newStatus);
        console.log(this.contactForm.control.get("firstname").status);
        // console.log(this.contactForm.control.status);
        console.log(this.contactForm.status);
        
        setTimeout(()=>{
          console.log(this.contactForm.status);
        })
        
      })

      this.contactForm.control.get("address").statusChanges.subscribe((newStatus:any)=>{
        console.log("address status changed");
        console.log(newStatus);
      })

      this.contactForm.statusChanges.subscribe((newStatus:any)=>{
        console.log("form status change");
        console.log(newStatus);
      })


      this.contactForm.control.get("firstname").valueChanges.subscribe((slectedValue:any)=>{
        console.log("firstname value change");
        console.log(slectedValue);
        console.log("name:-" , this.contactForm.control.get("firstname").value);
        console.log(this.contactForm.value);
  
        setTimeout(()=>{
          console.log(this.contactForm.value);
        })   
      })


      this.contactForm.control.get("address").valueChanges.subscribe((selectedValue:any)=>{
        console.log("address value changed");
        console.log(selectedValue);
  
      })

      this.contactForm.valueChanges.subscribe((selectedValue:any)=>{
        console.log("form value change");
        console.log(selectedValue);
        
      })

    })


  }

  onSubmit(){ 
    console.log(this.contact);
  }


  withoutOnlyself(){
    this.contactForm.control.get("firstname").setValue("");
  }

  withOnlyself(){
    this.contactForm.control.get("firstname").setValue("" , {onlySelf:true});
  }

  withoutEmit(){
    this.contactForm.control.get("firstname").setValue("sachin",{emitEvent:false})
  }
  emit(){
    this.contactForm.control.get("firstname").setValue("")
  }



  setDefaults(){
    // this.contact = {
    //   firstname:"virat",
    //   lastname:"kohli",
    //   email:"vk18@gmail.com",
    //   gender:"male",
    //   isMarried:true,
    //   country:"2",
    //   address:{city:"Bangluru",street:"one eight",pincode:"180018"}
    // } 

    let contact = {
      firstname:"virat",
      lastname:"kohli",
      email:"vk18@gmail.com",
      gender:"male",
      isMarried:true,
      country:"2",
      address:{city:"Bangluru",street:"one eight",pincode:"180018"}
    }

    this.contactForm.setValue(contact);

    // this.countryForm.form.get("country").patchValue(null)


  }

  setValue(){
    let contact = {
      firstname:"Ravindra",
      lastname:"Jadeja",
      email:"rj8@gmail.com",
      gender:"male",
      isMarried:true,
      country:"2",
      address:{city:"Jamnagar",street:"reliance",pincode:"353558"}
    }
    this.contactForm.setValue(contact);
  }

  setAddress(){
    let address = {
      city:"sydney",
      street:"down street",
      pincode:"490545"
    }
    this.contactForm.control.get("address").setValue(address)
  }

  changeCountry(){
    // this.contact.country="3";
    // this.contactForm.controls["country"].setValue("1");
  
    this.contactForm.control.get("country").setValue("1");
  }
  patchAddress(){
    let address = {
      city:"Mumbai",
      street: "Marin Dive",
      pincode: "50000"
    };

    // let address = this.contactForm.controls["address"] as FormGroup
    // address.patchValue(obj);

    this.contactForm.control.get("address").patchValue(address);

   }


   patchName(){
    // let obj = {
    //   firstname:"rohit",
    //   lastname:"Sharma",
    //   email:"hitman45@gmail.com"
    // };

    // this.contactForm.control.patchValue(obj);

    let contact ={
      firstname:"rohit",
      lastname:"Sharma",
      email:"hitman45@gmail.com"
    }
    this.contactForm.control.patchValue(contact);
  }

   reset(){
    this.contactForm.reset();
   }

   resetForm(contactForm : NgForm){
    contactForm.resetForm()
  }


}


export class country{
  constructor(id:string,  name:string ){
    this.id=id,
    this.name= name
  }

  id:string;
  name:string;
}


