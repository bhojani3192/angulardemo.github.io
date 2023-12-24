 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import { Repos} from './repos'; 
 
@Injectable()
export class GitHubService { 
   baseURL:string="https://api.github.com/";
 
   constructor(private http:HttpClient){
   }
 
   getRepos(userName:string): Observable<Repos[]> {
        return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos')
   }
   getReposCatchError(userName:string): Observable<Repos[]>{
      return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos')
   }
   getReposMap(userName:string): Observable<Repos[]>{
      return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos')
   }
   getReposUrlParameter(userName:string): Observable<Repos[]>{
      return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos')
   }
   getReposHeader(userName:string): Observable<Repos[]>{
      return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos')
   }
   getReposCookie(userName:string): Observable<Repos[]>{
      return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos')
   }
   getReposTypedResponse(userName:string): Observable<Repos[]>{
      return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos')
   }
   getReposPara(userName:string): Observable<Repos[]>{
      return this.http.get<Repos[]>(this.baseURL + 'users/' + userName + '/repos')
   }



}