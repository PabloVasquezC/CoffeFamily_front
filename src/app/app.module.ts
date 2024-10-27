import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  
  imports: [
    BrowserModule, 
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsPageComponent,
    RouterModule.forRoot(routes),
  ],
  providers: [],
})
export class AppModule { }