import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsPageComponent } from './products-page/products-page.component';  

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'sobre', component: AboutComponent },
    { path: 'productos', component: ProductsPageComponent },
    { path: '**', redirectTo: '' } 
];

