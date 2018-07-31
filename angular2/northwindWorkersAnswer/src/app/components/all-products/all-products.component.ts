import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-all-products',
    templateUrl: './all-products.component.html',
    styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

    public products: Product[];

    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        let observable: Observable<Product[]> = this.productsService.getAllProducts();
        observable.subscribe((products) => { // Arrow Function (Lambda Expression)
            this.products = products;
        });
    }

}
