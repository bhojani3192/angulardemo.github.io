import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { ServiceComponent } from './service/service.component';
import { BookComponent } from './book/book.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { BannerComponent } from './home/banner/banner.component';
import { SliderComponent } from './home/slider/slider.component';
import { HomeBlogComponent } from './home/home-blog/home-blog.component';
import { AboutTravelComponent } from './home/about-travel/about-travel.component';
import { AboutPageContentComponent } from './about/about-page-content/about-page-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatCardModule, MatDatepickerModule, MatFormFieldModule, MatRadioModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { PaymentComponent } from './payment/payment.component';
import { MatInputModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SwitchComponent } from './switch/switch.component';
import { ttClassDirective } from './admin/tt-class.directive';
import { ttIfDirective } from './admin/tt-if.directive';
import { ttToggleDirective } from './admin/tt-toggle.directive';
import { ttTooltipDirective } from './admin/tt-tooltip.directive';
import { TempConverterPipe } from './admin/tempconverter.pipe';
import { ObservableComponent } from './observable/observable.component';
import { CreateobservableComponent } from './observable/createobservable/createobservable.component';
import { DatePipe } from '@angular/common';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { GrandchildComponent } from './lifecycle/child/grandchild/grandchild.component';
import { LifechildComponent } from './lifecycle/lifechild/lifechild.component';
import { FormComponent } from './form/form.component';
import { TemplateformComponent } from './form/templateform/templateform.component';
import { ReactiveformComponent } from './form/reactiveform/reactiveform.component';
import { AngularserviceComponent } from './angularservice/angularservice.component';
import { ProductserviceService } from './angularservice/productservice.service';
import { LoggerService } from './angularservice/logger.service';
import { config } from 'rxjs';
import { PRODUCTSERVICE_SERVICE,USE_FAKE,APIURL,APP_CONFIG } from './angularservice/token';
import { InjectionComponent } from './injection/injection.component';
import { ChiildoneComponent } from './injection/chiildone/chiildone.component';
import { ChildtwoComponent } from './injection/childtwo/childtwo.component';
import { InjectionService } from './injection/injection.service';
import { EagerService } from './injection/eager.service';
import { LazyvalueService } from './injection/lazyvalue.service';
import { InjectiongrandchildComponent } from './injection/chiildone/injectiongrandchild/injectiongrandchild.component';
import { testDirective } from './injection/chiildone/test-directive';
import { CustomvalidComponent } from './form/reactiveform/customvalid/customvalid.component';
import { TempcustomvalidComponent } from './form/templateform/tempcustomvalid/tempcustomvalid.component';
import { gteValidatorDirective } from './form/templateform/tempcustomvalid/gte.validator';
import { GteService } from './form/reactiveform/customvalid/gte.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { HttppostComponent } from './httppost/httppost.component';
import { GitHubService } from './core/services/github.service';
import { AppHttpIntercepter } from './httpclient/appIntercepter';
import { RoutingComponent } from './routing/routing.component';
import { ProductComponent } from './routing/product/product.component';
import { ProductDetailComponent } from './routing/product/product-detail/product-detail.component';
import { ProductoverviewComponent } from './routing/product/product-detail/productoverview/productoverview.component';
import { ProductspecComponent } from './routing/product/product-detail/productspec/productspec.component';
import { GuardComponent } from './routing/guard/guard.component';
import { ProductService } from './routing/product/product.service';
import { ProductGuardService } from './routing/guard/product-guard.service';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AuthgurdService } from './userlogin/authgurd.service';
import { AuthService } from './userlogin/auth.service';
import { ProductaddComponent } from './routing/product/productadd/productadd.component';
import { ProductviewComponent } from './routing/product/productview/productview.component';
import { ProducteditComponent } from './routing/product/productedit/productedit.component';
import { ProductlistresolveService } from './routing/product/productlistresolve.service';
import { Product1Component } from './routing/product1/product1.component';
import { Product2Component } from './routing/product2/product2.component';
import { Product1detailComponent } from './routing/product1/product1detail/product1detail.component';
import { Product2detailComponent } from './routing/product2/product2detail/product2detail.component';
import { StaticComponent } from './routing/static/static.component';
import { DynamicComponent } from './routing/dynamic/dynamic.component';
import { ActivatedrouteComponent } from './routing/activatedroute/activatedroute.component';
import { HomeModule} from './newHome/home.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared/shared.module';
import { GithubModule } from './github';
import { NgmoduleComponent } from './ngmodule/ngmodule.component';
import { CustompreloadingstrategyService } from './core/services/custompreloadingstrategy.service';
import { TestModule } from './test/test/test.module';
import { AdvanceComponent } from './advance/advance.component';
import { BtnComponent } from './advance/btn/btn.component';
import { CardComponent } from './advance/card/card.component';
import { EventComponent } from './event/event.component';
import { CustomerDetailComponent } from './event/customer-list/customer-detail/customer-detail.component';
import { CustomerListComponent } from './event/customer-list/customer-list.component';
import { TemplateVarComponent } from './advance/template-var/template-var.component';
import { NgcontainerComponent } from './advance/ngcontainer/ngcontainer.component';
import { NgtemplateComponent } from './advance/ngtemplate/ngtemplate.component';
import { TemplateoutletComponent } from './advance/templateoutlet/templateoutlet.component';
import { OutletchildComponent } from './advance/templateoutlet/outletchild/outletchild.component';
import { HighLightDirective } from './admin/app-highlight.directive';
import { HostComponent } from './advance/host/host.component';
import { ViewchildComponent } from './advance/viewchild/viewchild.component';
import { ChildviewComponent } from './advance/viewchild/childview/childview.component';
import { ViewchildrenComponent } from './advance/viewchildren/viewchildren.component';
import { ContentchildComponent } from './advance/contentchild/contentchild.component';
import { ChildContentComponent } from './advance/contentchild/child-content/child-content.component';
import { DecoretorComponent } from './advance/decoretor/decoretor.component';
import { SwitchmapComponent } from './observable/switchmap/switchmap.component';








const CONFIG = {
  apiUrl:'http://my.api.com',
  fake:true,
  title:'Injection Tokekn'
}









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MapComponent,
    ServiceComponent,
    BookComponent,
    BlogComponent,
    ContactComponent,
    ProfileComponent,
    ErrorComponent,
    BannerComponent,
    SliderComponent,
    HomeBlogComponent,
    AboutTravelComponent,
    AboutPageContentComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent,
    SwitchComponent,
    ttClassDirective,
    ttIfDirective,
    ttToggleDirective,
    ttTooltipDirective,
    HighLightDirective,
    TempConverterPipe,
    ObservableComponent,
    CreateobservableComponent,
    LifecycleComponent,
    ChildComponent,
    GrandchildComponent,
    LifechildComponent,
    FormComponent,
    TemplateformComponent,
    ReactiveformComponent,
    AngularserviceComponent,
    InjectionComponent,
    ChiildoneComponent,
    ChildtwoComponent,
    InjectiongrandchildComponent,
    testDirective,
    CustomvalidComponent,
    TempcustomvalidComponent,
    gteValidatorDirective,
    HttpclientComponent,
    HttppostComponent,
    RoutingComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductoverviewComponent,
    ProductspecComponent,
    GuardComponent,
    UserloginComponent,
    ProductaddComponent,
    ProductviewComponent,
    ProducteditComponent,
    Product1Component,
    Product2Component,
    Product1detailComponent,
    Product2detailComponent,
    StaticComponent,
    DynamicComponent,
    ActivatedrouteComponent,
    NgmoduleComponent,
    AdvanceComponent,
    BtnComponent,
    CardComponent,
    EventComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    TemplateVarComponent,
    NgcontainerComponent,
    NgtemplateComponent,
    TemplateoutletComponent,
    OutletchildComponent,
    HostComponent,
    ChildviewComponent,
    ViewchildComponent,
    ViewchildrenComponent,
    ContentchildComponent,
    ChildContentComponent,
    DecoretorComponent,
    SwitchmapComponent
  ],
  imports: [
    HomeModule,
    SharedModule,
    AdminModule,
    GithubModule,
    TestModule,
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NgFor,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule ,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ provideAnimations(),DatePipe,ProductserviceService,LoggerService,InjectionService,EagerService,LazyvalueService,GteService,gteValidatorDirective,GitHubService,ProductService,ProductGuardService,AuthgurdService,AuthService,ProductlistresolveService,CustompreloadingstrategyService,
  {provide:'PRODUCTSERVICE_SERVICE', useClass:ProductserviceService},
  // {provide:'USE_FAKE',useValue:true},
  // {provide:'APIURL', useValue:'http://SomeEndPoint.com/api'},
  // {provide:'CONFIG', useValue:config},
  {provide:PRODUCTSERVICE_SERVICE, useClass:ProductserviceService},
  {provide:USE_FAKE,useValue:true},
  {provide:APIURL, useValue:'http://SomeEndPoint.com/api'},
  {provide:APP_CONFIG, useValue:CONFIG},
  {provide:HTTP_INTERCEPTORS,useClass:AppHttpIntercepter,multi:true}
],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
