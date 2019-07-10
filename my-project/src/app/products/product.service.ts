import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root' //Access this service from any component
}) 
export class ProductService {
    private productUrl = 'assets/products.json';

    constructor(private http: HttpClient ){}

    getProducts(): Observable<IProduct[]> { 
       return this.http.get<IProduct[]>(this.productUrl).pipe(
           tap(data => console.log('All: ' + JSON.stringify(data))),
           catchError(this.handleError)
       ); //get<IProduct[]> json structure we set the get method generic parameter to IProduct array. When we get a response back this will map the returned response to an array of products 
    }
    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            //A client-side or network error occured. Handle it accordingly.
            errorMessage = `An error occured: $(err.error.message)`;
        } else {
            //The backend returned an unsuccessful response code.
            //The response body may contain rules as to what went wrong
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}