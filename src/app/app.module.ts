import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductCardComponent } from './products-page/product-card/product-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  
  imports: [
    CommonModule,
    BrowserModule, 
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsPageComponent,
    ProductCardComponent,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
    ProductCardComponent,
    ProductsPageComponent
  ],
  providers: [],
})
export class AppModule { }
