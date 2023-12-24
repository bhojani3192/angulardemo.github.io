import { Component, Inject, NgModule, OnInit} from '@angular/core';
import { ProductserviceService } from './productservice.service';
import { PRODUCTSERVICE_SERVICE,USE_FAKE,APIURL,APP_CONFIG } from './token';



@Component({
  selector: 'app-angularservice',
  templateUrl: './angularservice.component.html',
  styleUrls: ['./angularservice.component.scss'],
  providers:[]

})
export class AngularserviceComponent implements OnInit {


  
  // products: Product[]

  products:any;
  // productService;

  constructor(  
    // @Inject('PRODUCTSERVICE_SERVICE') private productService:ProductserviceService,
    // @Inject('USE_FAKE') public fake:boolean,
    // @Inject('APIURL') public ApiUrl:string,
    // @Inject('CONFIG') public config:any

    @Inject(PRODUCTSERVICE_SERVICE) private productService:ProductserviceService,
    @Inject(USE_FAKE) public fake:boolean,
    @Inject(APIURL) public ApiUrl:string,
    @Inject(APP_CONFIG) public Config:any
    ) { 

    // this.productService = new ProductserviceService()
  }

  getProducts(){
    this.products = this.productService.getProducts()
  }


  ngOnInit(): void {
  }

}
