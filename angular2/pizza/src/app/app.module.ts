import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

import { PizzaServiceService } from './pizza-service.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PizzaListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PizzaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
