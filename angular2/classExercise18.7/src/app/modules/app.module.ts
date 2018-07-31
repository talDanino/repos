import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../components/app.component';
import { HeaderComponentComponent } from '../components/header-component/header-component.component';
import { FooterComponentComponent } from '../components/footer-component/footer-component.component';
import { HomeComponentComponent } from '../components/home-component/home-component.component';
import { UsersComponentComponent } from '../components/users-component/users-component.component';
import { MenuComponentComponent } from '../components/menu-component/menu-component.component';
import { Page404ComponentComponent } from '../components/page404-component/page404-component.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    UsersComponentComponent,
    MenuComponentComponent,
    Page404ComponentComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
