import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Table1Component } from './table/table.component';
import {ButtonModule} from 'primeng/button';





@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Table1Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    ButtonModule,
    
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
