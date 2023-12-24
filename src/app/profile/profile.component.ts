import { Component, OnInit } from '@angular/core';
import { Profiledetail } from './profiledetail';
import { AuthService } from '../userlogin/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  title: string = "Profile";

  Profiledetails: Profiledetail[] = [
    {title:'BirthDate', titledata: '31 August 2000'},
    {title:'Gender', titledata: 'Male'},
    {title:'Payment Method', titledata: 'Visa'},
    {title:'Change Password',  titledata: '********'}
  ]

  color:string = '#999999';

  constructor(private AuthService:AuthService, private router:Router){

  }

  logOut(){
    this.AuthService.logoutUser();
    this.router.navigate([''])
  }
    


  ngOnInit(): void {
  }

}
