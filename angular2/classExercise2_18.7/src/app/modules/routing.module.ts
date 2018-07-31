import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponentComponent } from '../components/home-component/home-component.component';
import { Page404ComponentComponent } from '../components/page404-component/page404-component.component';
import { PhotosComponentComponent } from '../components/photos-component/photos-component.component';


const routes: Routes = [
    { path: "home", component: HomeComponentComponent },
    { path: "photos", component: PhotosComponentComponent },
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
