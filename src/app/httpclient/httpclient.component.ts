import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../core/services/repos';
import { GitHubService } from '../core/services/github.service';







 

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.scss']
})
export class HttpclientComponent implements OnInit {

  userName: string = "tektutorialshub";
  // baseURL:  string = "https://api.github.com/";
  repos: any[] =  [Repos];
  loading: boolean = false;
  errorMessage:any;
  pageNo= "2";
  sortOn=   "descreption"
  response:any


  // constructor(private http: HttpClient) { 

  // }

  constructor(private githubService : GitHubService) { 
    
  }


  ngOnInit(): void {
    // this.getRepos()
  }


  public getReposPara(){
      this.loading=true,
      this.errorMessage= "",
      this.githubService.getReposPara(this.userName ).subscribe(
        (response)=>{
          this.repos= response;
        },
        (error)=>{
          this.errorMessage=error.message; 
          this.loading = false;
        },
        () =>{this.loading = false}
      )
  }





  public getRepos(){
    this.loading= true;
    this.errorMessage= "";
    // return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
    this.githubService.getRepos(this.userName)
    .subscribe((response)=>{
      console.log("response recieved");
      // console.log(response);
      this.repos = response;
      },
      (error) =>{
        console.log("request faild with error");
        this.errorMessage=error
        this.loading = false
      
        // alert(error)
      },
      () =>{
        console.log("request complete");
        this.loading = false;
      } 
      
      ) 
  }


  public getReposTypedResponse(){
    this.loading= true;
    this.errorMessage= "";
    // return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
    this.githubService.getReposTypedResponse(this.userName)
    .subscribe((response)=>{
      console.log("response recieved");
      // console.log(response);
      this.repos = response;
      },
      (error) =>{
        console.log("request faild with error");
        this.errorMessage=error
        this.loading = false
      
        // alert(error)
      },
      () =>{
        console.log("request complete");
        this.loading = false;
      } 
      
      ) 
      
  }

  public getReposCatchError(){
    this.loading= true;
    this.errorMessage= "";
    // return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
    this.githubService.getReposCatchError(this.userName)
    .subscribe((response)=>{
      console.log("response recieved");
      // console.log(response);
      this.repos = response;
      },
      (error) =>{
        console.log("request faild with error");
        this.errorMessage=error
        this.loading = false
      
        // alert(error)
      },
      () =>{
        console.log("request complete");
        this.loading = false;
      } 
      
      ) 
  }

  public getReposMap(){
    this.loading= true;
    this.errorMessage= "";
    // return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
    this.githubService.getReposMap(this.userName)
    .subscribe((response)=>{
      console.log("response recieved");
      // console.log(response);
      this.repos = response;
      },
      (error) =>{
        console.log("request faild with error");
        this.errorMessage=error
        this.loading = false
      
        // alert(error)
      },
      () =>{
        console.log("request complete");
        this.loading = false;
      } 
      
      ) 
  }
  public getReposUrlParameter(){
    this.loading= true;
    this.errorMessage= "";
    // return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
    this.githubService.getReposUrlParameter(this.userName)
    .subscribe((response)=>{
      console.log("response recieved");
      // console.log(response);
      this.repos = response;
      },
      (error) =>{
        console.log("request faild with error");
        this.errorMessage=error
        this.loading = false
      
        // alert(error)
      },
      () =>{
        console.log("request complete");
        this.loading = false;
      } 
      
      ) 
  }
  public getReposHeader(){
    this.loading= true;
    this.errorMessage= "";
    // return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
    this.githubService.getReposHeader(this.userName)
    .subscribe((response)=>{
      console.log("response recieved");
      // console.log(response);
      this.repos = response;
      },
      (error) =>{
        console.log("request faild with error");
        this.errorMessage=error
        this.loading = false
      
        // alert(error)
      },
      () =>{
        console.log("request complete");
        this.loading = false;
      } 
      
      ) 
  }
  public getReposCookie(){
    this.loading= true;
    this.errorMessage= "";
    // return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
    this.githubService.getReposCookie(this.userName)
    .subscribe((response)=>{
      console.log("response recieved");
      // console.log(response);
      this.repos = response;
      },
      (error) =>{
        console.log("request faild with error");
        this.errorMessage=error
        this.loading = false
      
        // alert(error)
      },
      () =>{
        console.log("request complete");
        this.loading = false;
      } 
      
      ) 
  }







}
