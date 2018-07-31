import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/home/home.component';
import { HeadlineComponent } from '../components/headline/headline.component';
import { FormsModule } from "@angular/forms";
import { ClockComponent } from '../components/clock/clock.component';
import { AboutComponent } from '../components/about/about.component';
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { Page404Component } from '../components/page404/page404.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';
import { TopProductsComponent } from '../components/top-products/top-products.component';
import { HttpClientModule } from "@angular/common/http";
import { AllProductsComponent } from '../components/all-products/all-products.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule } from "@angular/material";

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        HeadlineComponent,
        ClockComponent,
        AboutComponent,
        Page404Component,
        MenuComponent,
        ThumbnailComponent,
        TopProductsComponent,
        AllProductsComponent,
        ProductDetailsComponent,
        ContactUsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RoutingModule,
        RouterModule,
        HttpClientModule,
        
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule
    ],
    //providers: [ProductsService],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
