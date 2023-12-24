import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubRoutingModule } from 'src/app/github/githubrouting.module';
import { RepoListComponent } from '../repo-list/repo-list.component';



@NgModule({
  declarations: [RepoListComponent],
  imports: [
    CommonModule,
    GithubRoutingModule,
  ],
  exports:[RepoListComponent]
})
export class GithubModule { }
