import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service"; 

@Component({ //it is the Decorator that makes this class a component
    selector: 'pm-products',
    templateUrl: './product-list.component.html', //to find our view
    styleUrls: ['./product-list.component.css'],
    //providers: [ProductService] -> already registered
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

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = []; //when we don't know the data type we use an array of any
    
    constructor(private productService: ProductService){ //executed when the component is created

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
    ngOnInit(): void { //perform any component initialization
        this.products = this.productService.getProducts();  
        this.filteredProducts = this.products;
        this.listFilter = 'cart'; 
    }
} //export to be available to other parts of the app
//our class which finds our associated code