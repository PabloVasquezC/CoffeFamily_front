import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// Importar los componentes que se van a utilizar
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsPageComponent,
    // Agrega aquí otros componentes que estés utilizando
  ],
  imports: [
    BrowserModule, // Importa el módulo del navegador
    RouterModule.forRoot(routes), // Configura las rutas
  ],
  providers: [],
  bootstrap: [AppComponent] // Componente raíz
})
export class AppModule { }
