import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponentComponent } from '../components/home-component/home-component.component';
import { UsersComponentComponent } from '../components/users-component/users-component.component';
import { Page404ComponentComponent } from '../components/page404-component/page404-component.component';


const routes: Routes = [
    { path: "home", component: HomeComponentComponent },
    { path: "users", component: UsersComponentComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: Page404ComponentComponent }

];

@NgModule({
  imports: [
    // Import the above routes into this module:
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
