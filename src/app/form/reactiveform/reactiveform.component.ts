import { Component, OnInit, ViewChild ,ElementRef } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators, FormBuilder} from '@angular/forms';
import { groupBy } from 'rxjs/internal/operators/groupBy';





@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

 
  // contactForm:any = new FormGroup({
  //   firstname: new FormControl({value: 'Rahul',disabled: false},[Validators.required,Validators.minLength(10)]),
  //   lastname: new FormControl(),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   country: new FormControl()
  // })



  // skillform

   skillForm:any = FormGroup
 
   get skills() : FormArray{
    return this.skillForm.get("skills") as FormArray
   }

   newSkills(): FormGroup{
    return this.formBuilder.group({
      skill:'',
      exp:''
    })
   }

   addSkills(){
    this.skills.push(this.newSkills())
   }

   removeSkill(i:number){
    this.skills.removeAt(i)
   }
   onsubmitSkill(){
    console.log(this.skillForm.value);
   }


  //  emp form
   empForm:any = FormGroup;

   employess(): FormArray{
    return this.empForm.get("employees") as FormArray
  }
 
  neEmployee(): FormGroup{
    return this.formBuilder.group({
        firstName: '',
        lastName: '',
        skills: this.formBuilder.array([])
    })
  }

  addEmployee(){
    this.employess().push(this.neEmployee())
  }

  removeEmployee(empIndex:number){
    this.employess().removeAt(empIndex)
  }

  employeeSkills(empIndex:number){
    return this.employess().at(empIndex).get("skills") as FormArray
  }

  newSkill(): FormGroup{
    return this.formBuilder.group({
        skill:'',
        exp:''
    })
  }

  addEmployeSkills(empIndex:number){
    this.employeeSkills(empIndex).push(this.newSkill())
  }

  removeEmployeSkills(empIndex:number, skillIndex:number){
    this.employeeSkills(empIndex).removeAt(skillIndex)
  }

  onsubmitEmployee(){
    console.log(this.empForm.value);
  }



  // techer form

  teacherForm:any = FormGroup;

  teachers() :FormArray{ 
    return this.teacherForm.get("teachers") as FormArray
  }

  newTeacher(): FormGroup{
    return this.formBuilder.group({
      name:'',
      batches:this.formBuilder.array([])
    })
  }

  addTeacher(){
    this.teachers().push(this.newTeacher())
  }

  removeTeacher(ti:number){
    this.teachers().removeAt(ti)
  }

  batches(ti:number): FormArray{
    return this.teachers().at(ti).get("batches") as FormArray
  }

  newBatch() : FormGroup{
    return this.formBuilder.group({
        name:'',
        students: this.formBuilder.array([])
    })
  }

  addBatch(ti:number){
    this.batches((ti)).push(this.newBatch());
  }

  removeBatch(ti:number,bi:number){
    this.batches(ti).removeAt(bi)
  }


  students(ti:number,bi:number) : FormArray{
    return this.batches(ti).at(bi).get("students") as FormArray 
  }

  newStudent() : FormGroup{
    return this.formBuilder.group({
      name:''
    })
  }

  addStudent(ti:number, bi:number){
    this.students(ti,bi).push(this.newStudent())
  }

  removeStudent(ti:number,bi:number ,si:number){
    this.students(ti,bi).removeAt(si)
  }

  onsubmitTeacher(){
    console.log(this.teacherForm.value);
  }

  patchValue1(){
    console.log('patchvalue1');

    var data = {
      teachers:[
        {
        name: 'Teacher 1', batches:[
          {name:'Batch No 1',students:[{name:'David'},{name:'Marsh'},{name:'Smith'}]},
          {name:'Batch No 2',students:[{name:'Shahin'},{name:'Babar'},{name:'Rizwan'}]}
        ]
      }
    ]
    }

    this.teacherForm.patchValue(data)
    
  }

  patchValue2(){
    console.log("patchvalue2");
    var data = {

      teachers:[
        {
          name:'Teacher 1', batches:[
            {name:'Batch No 1',students:[{name:'David'},{name:'Marsh'},{name:'Smith'}]},
            {name:'Batch No 2',students:[{name:'Shahin'},{name:'Babar'},{name:'Rizwan'}]}
          ]
        }
      ]
    }
      
    this.clearFormArray();
      
    data.teachers.forEach(t => {
      var teacher: FormGroup = this.newTeacher();
      this.teachers().push(teacher);

      t.batches.forEach(b =>{
        var batch = this.newBatch();

        (teacher.get('batches') as FormArray).push(batch);

        b.students?.forEach(s =>{
          (batch.get('students') as  FormArray).push(this.newStudent())
        })

      })
    });
    
    this.teacherForm.patchValue(data)
    
  }


clearFormArray(){
  this.teachers().clear()
}





constructor(private formBuilder: FormBuilder) {
  this.skillForm = this.formBuilder.group({
    name:'',
    skills: this.formBuilder.array([])
  })  


  this.empForm=this.formBuilder.group({
    employees: this.formBuilder.array([])
  })

  this.teacherForm= this.formBuilder.group({
      teachers: this.formBuilder.array([])
  })

  this.validForm = this.formBuilder.group({
      email: new FormControl(''),
      mobile: new FormControl(''),
      notifyVia: new FormControl('',Validators.required)
  })

  


 }

//  @ViewChild('validForm') validForm:any;  


validForm:any =  FormGroup
notifyOptions = ["Email","SMS"]

changeValidators(){

      console.log(this.validForm.get('notifyVia').value);

      if(this.validForm.get('notifyVia').value === "Email"){
        this.validForm.controls["email"].setValidators([Validators.required,Validators.email]);
        this.validForm.controls["mobile"].clearValidators();
      } else{
        this.validForm.controls["email"].clearValidators();
        this.validForm.controls["mobile"].setValidators([Validators.required,Validators.minLength(10)])
      }

      this.validForm.get("email").updateValueAndValidity();
      this.validForm.get("mobile").updateValueAndValidity();      

}








   countryList: country[] = [
    new country("1" , "India"),
    new country("2", "Uk"),
    new country("2", "USA"),
  ]
    
  contactForm:any = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.minLength(3)]],
    lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
    email: ['', [Validators.required, Validators.email]],
    gender: ['', [Validators.required]],
    isMarried: ['', [Validators.required]],
    country: ['', [Validators.required]],
    address: this.formBuilder.group({
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
    })
  });



  withOutOnlySelf(){
    this.contactForm.get("firstname").setValue("", {onlySelf:true});
  }
 
  withouEmitEvent(){
    this.contactForm.get("firstname").setValue("Sachin");
  }

  withEmitEvent(){
    this.contactForm.get("firstname").setValue("",{emitEvent:false});
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }
 

  ngOnInit(): void {

    this.setDefault();

    this.contactForm.get("firstname").statusChanges.subscribe((x:any)=>{
      console.log("fisrtname status change");
      console.log(x);
    })

    this.contactForm.get("lastname").statusChanges.subscribe( (newStatus:any)=>{
      console.log("lastname changed");  
      console.log(newStatus);
      console.log(this.contactForm.get("lastname").status);
      console.log(this.contactForm.status);
    }
    )

    this.contactForm.get("address").statusChanges.subscribe((newStatus:any) =>{
      console.log("address status changed");
      console.log(newStatus);
    })

    this.contactForm.statusChanges.subscribe((newStatus:any)=>{
      console.log("form status changed");
      console.log(newStatus);
    })

    // setTimeout(()=> {
    //   console.log(this.contactForm.status);
    // })

  
    // this.contactForm.get("firstname").valueChanges.subscribe((x:any)=>{
    //   console.log("fisrtname value change");
    //   console.log(x);
    // })

    // this.contactForm.valueChanges.subscribe((x:any)=>{
    //   console.log("form value change");
    //   console.log(x);  
    // })

    this.contactForm.get("firstname").valueChanges.subscribe((slectedValue:any)=>{
      console.log("firstname value change");
      console.log(slectedValue);
      console.log("name:-" , this.contactForm.get("firstname").value);
      console.log(this.contactForm.value);

      setTimeout(()=>{
        console.log(this.contactForm.value);
      })   
    })

    this.contactForm.get("address").valueChanges.subscribe((slectedValue:string)=>{
        console.log("address value change");
        console.log(slectedValue); 
    })

    this.contactForm.valueChanges.subscribe((slectedValue:any)=>{
      console.log("form value change");
      console.log(slectedValue);
    })


    // countryform

    this.countryForm = this.formBuilder.group({
      country:[null]
    })  

  this.countryForm.get("country").valueChanges.subscribe((f:any) => {
    this.onCountryChanged(f)
  })

  this.validForm.get("notifyVia").valueChanges.subscribe((data:any)  =>{
    this.changeValidators()
  })


  }

  // country Form

  countryForm:any = FormGroup

  countries = [
    {id:1, name:"India"},
    {id:2, name:"Newzeland"},
    {id:3, name:"South Africa"},
    {id:4, name:"Australia"},
    {id:5, name:"England"}
  ]

  countrySubmit(){
    console.log("Form Submitted");
    console.log(this.countryForm.value);
  }

  onCountryChanged(value:number){
    console.log("oncountry changed"); 
    console.log(value);
  }

  country_name="";
  addCountry(){
    const country = this.countries.find(el => el.name === this.country_name);
    if(!country){
      let  id= Math.max.apply(Math, this.countries.map(function(o) {return o.id;}))
      this.countries.push({id:id+1, name:this.country_name})
      this.country_name="";
    }
  } 

  set_country="";

  setCountrie(){
    const country = this.countries.find(el => el.name === this.set_country)
      if (country){
        this.countryForm.get("country").patchValue(country.id)
      }
    }
  

    

  setFirstname() {
    this.contactForm.get("firstname").setValue("stark")
  }

  onlySelf() {
    this.contactForm.get("firstname").setValue("",{onlySelf:true})
  }

  withoutOnlyself(){
    this.contactForm.get("firstname").setValue("Hazelwood")
  }

  withoutEmit(){
    this.contactForm.get("firstname").setValue("",{emitEvent:false})
  }

  emit(){
    this.contactForm.get("firstname").setValue("Maxi")
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

    // this.countryForm.get("country").patchValue(null);

  }

  setValue(){
    let contact = {
      firstname:"Steven",
      lastname:"Smith",
      email:"stevenw@gmail.com",
      gender:"male",
      isMarried:true,
      country:"4",
      address:{city:"sydney",street:"down street",pincode:"450545"}
    }
    this.contactForm.setValue(contact)
  }

  setAddress(){
    let address = {
      city:"sydney",
      street:"down street",
      pincode:"490545"
    }
    this.contactForm.get("address").setValue(address)
  }

  setCountry(){
    this.contactForm.get("country").setValue("2")
  }

  patchAddress(){ 
    let address = {
      city:"sydney",
      street:"down street",
      pincode:"450545"
    }

    this.contactForm.get("address").patchValue(address)
  }

  patchName(){
    let contact = {
      firstname:"steven",
      lastname:"Smith"
    }
      
    this.contactForm.patchValue(contact)
  }

  reset(){
    this.contactForm.reset()
  }


  get firstname() {
    return this.contactForm.get('firstname');
  }
 
  get lastname() {
    return this.contactForm.get('lastname');
  }
 
  get email() {
    return this.contactForm.get('email');
  }
 
  get gender() {
    return this.contactForm.get('gender');
  }
 
  get isMarried() {
    return this.contactForm.get('isMarried');
  }
 
  get country() {
    return this.contactForm.get('country');
  }
 
  get city() {
    return this.contactForm.get("address").get('city');
  }
 
  get street() {
    return this.contactForm.get("address").get('street');
  }
 
  get pincode() {
    return this.contactForm.get("address").get('pincode');
  }


}

export class country{

  constructor(id:string, name:string ){
    this.id=id,
    this.name=name
  }

  id:string;
  name:string;
}