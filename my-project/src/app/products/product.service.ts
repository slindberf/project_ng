import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root' //Access this service from any component
}) 
export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient ){}

    getProducts(): Observable<IProduct[]> { 
       return this.http.get<IProduct[]>(this.productUrl); //get<IProduct[]> json structure we set the get method generic parameter to IProduct array. When we get a response back this will map the returned response to an array of products 
    }
}