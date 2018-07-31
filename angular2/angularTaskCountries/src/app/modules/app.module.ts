import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing.module';
import { AppComponent } from '../components/app.component';
import {HeaderComponent} from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { HomeComponent } from '../components/home/home.component';
import { CountriesListComponent } from '../components/countries-list/countries-list.component';

import { HttpClientModule } from "@angular/common/http";
import { CountryService } from '../services/country.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    CountriesListComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
