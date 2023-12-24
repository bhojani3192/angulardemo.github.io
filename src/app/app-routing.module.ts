import { NgModule, ViewChild } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { ServiceComponent } from './service/service.component';
import { BookComponent } from './book/book.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { SwitchComponent } from './switch/switch.component';
import { ObservableComponent } from './observable/observable.component';
import { CreateobservableComponent } from './observable/createobservable/createobservable.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormComponent } from './form/form.component';
import { TemplateformComponent } from './form/templateform/templateform.component';
import { ReactiveformComponent } from './form/reactiveform/reactiveform.component';
import { AngularserviceComponent } from './angularservice/angularservice.component';
import { InjectionComponent } from './injection/injection.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttppostComponent } from './httppost/httppost.component';
import { RoutingComponent } from './routing/routing.component';
import { ProductComponent } from './routing/product/product.component';
import { ProductDetailComponent } from './routing/product/product-detail/product-detail.component';
import { ProductoverviewComponent } from './routing/product/product-detail/productoverview/productoverview.component';
import { ProductspecComponent } from './routing/product/product-detail/productspec/productspec.component';
import { ProductGuardService } from './routing/guard/product-guard.service';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AuthgurdService } from './userlogin/authgurd.service';
import { ProductaddComponent } from './routing/product/productadd/productadd.component';
import { ProductviewComponent } from './routing/product/productview/productview.component';
import { ProducteditComponent } from './routing/product/productedit/productedit.component';
import { DeactivateguardService } from './core/services/deactivateguard.service';
import { ProductlistresolveService } from './routing/product/productlistresolve.service';
import { Product1Component } from './routing/product1/product1.component';
import { Product2Component } from './routing/product2/product2.component';
import { StaticComponent } from './routing/static/static.component';
import { DynamicComponent } from './routing/dynamic/dynamic.component';
import { NgmoduleComponent } from './ngmodule/ngmodule.component';
import { CustompreloadingstrategyService } from './core/services/custompreloadingstrategy.service';
import { AdvanceComponent } from './advance/advance.component';
import { EventComponent } from './event/event.component';
import { ViewchildComponent } from './advance/viewchild/viewchild.component';
import { ContentchildComponent } from './advance/contentchild/contentchild.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';



const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'map',component: MapComponent},
  {path: 'service',component: ServiceComponent},
  {path: 'book',component: BookComponent},  
  {path: 'blog',component: BlogComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'profile',component: ProfileComponent , canActivate: [AuthgurdService]},
  {path: 'payment',component:PaymentComponent , canActivate: [AuthgurdService]},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent, canDeactivate:[DeactivateguardService]},
  {path: 'switch', component:SwitchComponent},
  {path: 'lifecycle', component:LifecycleComponent},
  {path: 'template', component:TemplateformComponent},
  {path: 'reactive', component:ReactiveformComponent},
  {path: 'angularservice', component:AngularserviceComponent},
  {path: 'form', component:FormComponent},
  {path: 'injection', component:InjectionComponent},
  {path: 'http', component:HttpclientComponent},
  {path: 'httppost', component:HttppostComponent},
  {path: 'routing', component:RoutingComponent},
  {path: 'ngmodule', component:NgmoduleComponent},
  {path: 'advance', component:AdvanceComponent},
  {path: 'event', component:EventComponent},
  {path:'viewchild', component:ViewchildComponent},
  {path:'contentchild',component:ContentchildComponent},
  {path: 'observable', component:ObservableComponent},
  {path: 'createobservable', component:CreateobservableComponent},
  {path: 'switchmap', component:SwitchmapComponent},
  {path:'admin',  loadChildren:():any => import ('./admin/admin.module'), data: {preload:true, delay:5000}, canLoad:[AuthgurdService]},
  {path:'test', loadChildren:():any => import ('./test/test/test.module'), data:{preload:true, delay:10000}, canLoad:[AuthgurdService]},
  
  // {path: 'product', component:ProductComponent,canActivate: [ProductGuardService],
  //  children : [
  //   {path:'detail/:id', component:ProductDetailComponent,
  //   children :[
  //     {path : 'overview' , component:ProductoverviewComponent},
  //     {path:  'spec', component:ProductspecComponent},
  //     {path:'', redirectTo:"overview",pathMatch:'full'}
  //   ]
  // },
  //  ]
  // },
  
   {path: 'product', component:ProductComponent,canActivate: [AuthgurdService],canActivateChild:[AuthgurdService], resolve: {products: ProductlistresolveService},
   data: {id:'1', data:'some data'},
   children : [
    {path:'detail/:id', component:ProductDetailComponent,
    children :[
      
      {path : 'overview' , component:ProductoverviewComponent,outlet:'prdetail' },
      {path:  'spec', component:ProductspecComponent},
      {path:'', redirectTo:"overview",pathMatch:'full'},
    ],

  },
  {path: 'add', component:ProductaddComponent},
  {path:'view/:id', component:ProductviewComponent},
  {path:'edit/:id', component:ProducteditComponent}
   ]
  },
  {path: 'product1', component:Product1Component},
  {path: 'product2', component:Product2Component , resolve: {products: ProductlistresolveService}},
  {path: 'product1/:id', component:Product1Component},
  {path: 'product2/:id', component:Product2Component , resolve: {products: ProductlistresolveService}},
  {path: 'userlogin', component:UserloginComponent},
  {path: 'static', component:StaticComponent, data:{id:'1',name:"Angular"}},
  {path: 'dynamic', component:DynamicComponent},
  // {path:'product/:id', component:ProductDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes , {preloadingStrategy: CustompreloadingstrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
