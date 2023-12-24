import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoListComponent } from './pages/list/repo-list/repo-list.component';
import { FormsModule } from '@angular/forms';


const routes:Routes = [
    {path:'github', component:RepoListComponent,
        children :[
            {path:'list', component: RepoListComponent}
        ]
},
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [
        RouterModule,
        FormsModule
    ]

})


export class GithubRoutingModule{

}