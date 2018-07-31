import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { MathService } from '../../services/math.service';

@Component({
    selector: 'app-top-products',
    templateUrl: './top-products.component.html',
    styleUrls: ['./top-products.component.css']
    //providers: [ProductsService]
})
export class TopProductsComponent implements OnInit {

    public products: Product[];
    public average: number;

    constructor(private productsService: ProductsService, 
        private mathService: MathService) { }

    ngOnInit() {
        // this.products = this.productsService.getTopProducts();
        this.productsService.getTopProductsAsync((prods) => {
           
            this.products = prods;

            let priceArray: number[] = new Array<number>();
            for(let i = 0; i < this.products.length; i++) {
                priceArray.push(this.products[i].price);
            }
            this.average = this.mathService.getAverage(priceArray);

        });
    }
}
