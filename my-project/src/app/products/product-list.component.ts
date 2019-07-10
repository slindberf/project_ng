import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({ //it is the Decorator that makes this class a component
    selector: 'pm-products',
    templateUrl: './product-list.component.html', //to find our view
    styleUrls: ['./product-list.component.css']
}) //component decorator that defines our metadata

export class ProductListComponent implements OnInit{

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false; // so the images are not displayed when the page is first loaded
    

    _listFilter: string;
    get listFilter():string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2016",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2016",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
          "productId": 3,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2016",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      }
    ]; //when we don't know the data type we use an array of any
    
    constructor(){
        this.filteredProducts = this.products;
        this.listFilter = 'cart'; 
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
            //if filter text is found in the productName if so the element is added to the filtered list
    }

    toggleImage():void {
        this.showImage = !this.showImage;
        //in the template show image only if true: <img *ngIf='showImage' >
    }
    ngOnInit(): void {
        console.log("In OnInit");
    }
} //export to be available to other parts of the app
//our class which finds our associated code