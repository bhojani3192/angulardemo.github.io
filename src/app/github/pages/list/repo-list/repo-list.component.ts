import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubService } from 'src/app/core/services/github.service';
import { Repos } from 'src/app/core/services/repos';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {

  userName: string = "angular";
  repos:any =  Repos
  loading:boolean = false;
  errorMessage="";

  constructor(private githubService: GitHubService) { }

  public getRepos(){
    this.loading = true;
    this.errorMessage="";
    this.githubService.getRepos(this.userName).subscribe((response)=>{
      this.repos = response;
    },
    (error)=>{this.errorMessage= error;   this.loading=false;},
    () =>{this.loading=false;});
    
  }

  ngOnInit(): void {
  }

}
