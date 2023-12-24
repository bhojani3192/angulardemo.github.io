import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TestComponent } from "./test.component";

const routes: Routes =[
    {path:'list', component:TestComponent},
    {path:'',redirectTo:'list'}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class TestingRouterModule{
    
}