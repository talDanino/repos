import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: Product;

    constructor(private activatedRoute: ActivatedRoute,
                private productsService: ProductsService) { }

    ngOnInit() {
        // Take parameter called "id" from the current route: 
        let id = this.activatedRoute.snapshot.params["id"]; // return string.
        id = Number(id); // convert to int.
        
        this.productsService.getAllProducts().subscribe((products) => {

            for(let i = 0; i < products.length; i++) {
                if(products[i].id === id) {
                    this.product = products[i];
                    break;
                }
            }
        });
    }
}
