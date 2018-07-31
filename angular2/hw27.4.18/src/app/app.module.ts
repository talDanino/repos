import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BookListComponent } from './book-list/book-list.component';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { HomeComponent } from './home/home.component';
import { BookService } from './shared/services/book-service.services';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    MainComponent,
    BookListComponent,
    SelectedBookComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
