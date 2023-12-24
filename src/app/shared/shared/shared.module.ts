import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NewheaderComponent } from '../newheader/newheader.component';
import { NewfooterComponent } from '../newfooter/newfooter.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({
  declarations: [NewheaderComponent,NewfooterComponent, HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NewheaderComponent,
    NewfooterComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
