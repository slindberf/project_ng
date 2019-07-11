import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({ //identify the class as an angular module by attaching the ng module Decorator
  //and passing in metadata defining the details of this angular model
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ], //in the declarations array we define which of our components belong to this module
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([ //establish the routes for the root of the application
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '',redirectTo:'welcome', pathMatch: 'full'},
      { path: '**', redirectTo:'welcome', pathMatch: 'full'}
    ])
  ], //in the imports array we define the external modules that we want to have available to all of the components that belong to this angular module  
  //BrowserModule which every browser app must import. BrowserModule registers important application service providers such as error handling 
  bootstrap: [AppComponent] //defines the startup component of our app
}) 
export class AppModule { }
