import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  invalidCredentialMsg:string = "";
  username:string="";
  password:string="";
  retUrl:string=""

  constructor(private authService:AuthService , private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params)=>{
      let retUrl = params.get('retUrl');
      console.log('userLogincomponent/ngOnInit' + this.retUrl);
    });
  }

  onFormSubmit(loginForm:any){
      this.authService.login(loginForm.value.username , loginForm.value.password).subscribe((data)=>{
        console.log('return to' + this.retUrl);
        if(this.retUrl!=null){
          this.router.navigate([this.retUrl])
        }else{
          this.router.navigate([''])
        }
        
      })
  }

}
