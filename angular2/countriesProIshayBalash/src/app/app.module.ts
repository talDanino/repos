import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms"

/*import{service} from"service"*/

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UrlService } from './shared/services/UrlData.service';
import { HomeComponent } from './home/home.component';
import { CountryriesListComponent } from './countryries-list/countryries-list.component';



const appRoutes:Routes=[
  {path:"home", component: HomeComponent},
  {path:"CountriesList", component:CountryriesListComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"},
  {path:"**", component:PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PageNotFoundComponent,
    HomeComponent,
    CountryriesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UrlService],/*enter the service name here*/
  bootstrap: [AppComponent]
})
export class AppModule { }