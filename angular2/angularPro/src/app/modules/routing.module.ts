import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { Page404Component } from '../components/page404/page404.component';
import { TopProductsComponent } from '../components/top-products/top-products.component';
import { AllProductsComponent } from '../components/all-products/all-products.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "top-products", component: TopProductsComponent },
    { path: "all-products", component: AllProductsComponent },
    { path: "one-product/:id", component: ProductDetailsComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: Page404Component }
];

@NgModule({
    imports: [
        // Import the above routes into this module:
        RouterModule.forRoot(routes)
    ],
    declarations: []
})
export class RoutingModule { }