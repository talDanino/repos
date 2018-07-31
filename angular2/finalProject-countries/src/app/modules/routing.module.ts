import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../components/home/home.component';
import { CountriesListComponent } from '../components/countries-list/countries-list.component';


const routes: Routes = [
    {path: "home" ,component: HomeComponent },
    {path: "countries" ,component: CountriesListComponent },
    {path: "", redirectTo: "/home", pathMatch: "full" },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
