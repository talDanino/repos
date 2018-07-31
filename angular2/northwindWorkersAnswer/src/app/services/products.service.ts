import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root' // Since Angular 6 we can declare the root provider here.
})
export class ProductsService {

    // DI the httpClient which can get data from the server:
    public constructor(private httpClient: HttpClient) { }

    public getTopProducts(): Product[] {
        let products = new Array<Product>();
        products.push(new Product(1, "Apple", 3.5, 100));
        products.push(new Product(2, "Banana", 4.7, 120));
        products.push(new Product(3, "Peach", 5.2, 70));
        return products;
    }

    public getTopProductsAsync(callback: (prods: Product[]) => void): void {
        setTimeout(function () {
            let products = new Array<Product>();
            products.push(new Product(1, "Apple", 3.5, 100));
            products.push(new Product(2, "Banana", 4.7, 120));
            products.push(new Product(3, "Peach", 5.2, 70));
            callback(products);
        }, 5000);
        console.log("End of getTopProductsAsync");
    }

    public getAllProducts(): Observable<Product[]> {
        // Returns Observable object:
        return this.httpClient.get<Product[]>("/assets/json/products.json");
    }
    
}
