import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./adminrouter.module";
import { UserComponent } from "./pages/user/user.component";
import { RightsComponent } from "./pages/rights/rights.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AdminComponent } from "./pages";


@NgModule({
    declarations:[UserComponent, RightsComponent,DashboardComponent,AdminComponent],
    imports:[
        CommonModule,
        AdminRoutingModule
    ],
    providers:[],
    exports:[
        AdminComponent
    ]
})


export class AdminModule{

}