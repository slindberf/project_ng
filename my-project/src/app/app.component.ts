import { Component } from '@angular/core'; //import the members that we need

@Component({ //component decorator that defines the metadata, includes the template that lays out the view managed by this component
  selector: 'pm-root', //if we plan to reference the component in any html we  specify a selector
  //the selector defines the component's directive name. 
  //A custom Html tag, whenever this directive is used in the html angular renders this component's template. 
  template:  `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
    `
    //View Layout
    //Binding: {{pageTitle}}
})//template associated with this class. 
//In ts we attach the function to a class as a decorator. 
// A Decorator is a function that adds metadata to a class, its members, or its method arguments
//the scope of the Decorator is limited to feature that it decorates always prefixed with @ sign
//we define a decorator just above the class

//by convention the root app is named AppComponent
export class AppComponent { // properties and methods needed by our view
  pageTitle: string = 'Acme Product Management';  //one property and its data type with a default value 
} 
