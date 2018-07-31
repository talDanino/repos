import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { CountriesListComponent } from '../components/countries-list/countries-list.component';
import { HomeComponent } from '../components/home/home.component';



const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "countries", component: CountriesListComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
