import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";


import { NewhomeComponent } from './pages/newhome/newhome.component';
import { NewaboutComponent } from './pages/newabout/newabout.component';
import { NewcontactComponent } from './pages/newcontact/newcontact.component';

const routes:Routes = [
    {path:"newhome" , component:NewhomeComponent},
    {path:"newabout", component:NewaboutComponent},
    {path:"newcontact", component:NewcontactComponent}
]



@NgModule({
    declarations:[NewhomeComponent, NewaboutComponent, NewcontactComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers:[],
        
    
})


export class HomeModule{

}