import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { from } from 'rxjs';

@NgModule({ //identify the class as an angular module by attaching the ng module Decorator
  //and passing in metadata defining the details of this angular model
  declarations: [
    AppComponent,
    ProductListComponent 
  ], //in the declarations array we define which of our components belong to this module
  imports: [
    BrowserModule,
    FormsModule
  ], //in the imports array we define the external modules that we want to have available to all of the components that belong to this angular module  
  //BrowserModule which every browser app must import. BrowserModule registers important application service providers such as error handling 
  bootstrap: [AppComponent] //defines the startup component of our app
}) 
export class AppModule { }
