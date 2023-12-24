import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';
import { LoginmsgService } from '../login/loginmsg.service';
import { matchPassword } from './login.validator';
import { AuthService } from '../userlogin/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IDeactivatecomponent } from '../core/services/deactivatecomponent';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  // loginForm = new FormGroup({
  //   email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  //   password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("")])
  // })


  username="";
  password="";
  invalidCredentialMsg="";
  returl="";

  canExit() : boolean{

    if(confirm("Do you wish to please confirm")){
      return true
    } else {
      return false
    }

    
  }


  loginForm:any =  this.formBuilder.group({
      fname: ['', [Validators.required]], 
      username: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirm:['',  [Validators.required,]],
      agree:['',[Validators.required]]
  },{ validators:matchPassword});
  
  
  get fname(){  
    return this.loginForm.get('fname');
  }
  // get username(){  
  //   return this.loginForm.get('username');
  // }

  // get password(){
  //   return this.loginForm.get('password');
  // }
  get confirm(){
    return this.loginForm.get('confirm');
  }


  loginmsgs:any[] = [];
  LoginmsgService;


  constructor(private formBuilder:FormBuilder , private authService:AuthService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.LoginmsgService=new LoginmsgService();
   }


  getloginmsgs(){
    this.loginmsgs=this.LoginmsgService.getloginmsgs();
  }

  ngOnInit(): void {

    this.activatedRoute.queryParamMap.subscribe((params)=>{
      const retUrl = params.get('retUrl');
      console.log("RegisterComponent/ngonInit" + this.returl);
      
    })

  }

  onSubmit(loginForm:any){
    console.log(this.loginForm.value); 
    

    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe((data)=>{
      console.log("return to" + this.returl);

      if(this.returl != null){
        this.router.navigate(['']);
      }else{
        this.router.navigate([''])
      }
      
    })
  }



}
