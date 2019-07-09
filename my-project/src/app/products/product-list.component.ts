import { Component } from "@angular/core";

@Component({ //it is the Decorator that makes this class a component
    selector: 'pm-products',
    templateUrl: './product-list.component.html' //to find our view
}) //component decorator that defines our metadata

export class ProductListComponent {

} //export to be available to other parts of the app
//our class which finds our associated code