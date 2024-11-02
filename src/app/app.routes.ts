import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';  

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: AboutComponent },
    { path: 'productos', component: ProductsPageComponent },
    { path: '**', redirectTo: '' },
     
];

