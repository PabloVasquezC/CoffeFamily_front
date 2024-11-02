import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductCardComponent } from './components/products-page/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';

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
  providers: [
    provideHttpClient(withFetch()),
  ],
  

 

})
export class AppModule { }
