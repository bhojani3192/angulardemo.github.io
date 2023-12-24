import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginmsgService } from './loginmsg.service';
import { AuthService } from '../userlogin/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  username:string = "";
  password:string = "";
  invalidCredentialMsg="";
  retUrl:string="";

 

  loginForm = new FormGroup({
    username:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("")])
  })


  
  // onSubmit(){
  //   console.log(this.loginForm.value);  
  // }



  loginmsgs:any[] = [];
  LoginmsgService;



  constructor(private LoginMsgServie:LoginmsgService , private authService:AuthService, private router:Router, private activatedRoute:ActivatedRoute) {
    this.LoginmsgService=new LoginmsgService();
   }


  getloginmsgs(){
    this.loginmsgs=this.LoginmsgService.getloginmsgs();
  }

  ngOnInit(): void {
   this.activatedRoute.queryParamMap.subscribe((params)=>{
    const retUrl =  params.get('retUrl')
    console.log('Logincomponent/ngOnInit' + this.retUrl);
    
   })
  }

  onFormSubmit(loginForm:any){

    // debugger
    console.log(this.loginForm.value);  

    this.authService.login(loginForm.value.username,loginForm.value.password).subscribe((data)=>{
      console.log("return to" + this.retUrl);
      if(this.retUrl!= null){
        this.router.navigate([''])
      }else{
        this.router.navigate([''])
      }
      
    })
  }


}
