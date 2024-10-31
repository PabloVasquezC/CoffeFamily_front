import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from '../models/product/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

  constructor() { }

  ngOnInit() {
  }

  products: Product[] = [
    { id: 1, name: 'Café Espresso', description: 'Un café fuerte y concentrado, perfecto para empezar el día.', price: 100, image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', quantity: 1 },
    { id: 2, name: 'Café Americano', description: 'Café filtrado con un sabor suave y ligero.', price: 150, image: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhZmV8ZW58MHx8MHx8fDA%3D', quantity: 1 },
    { id: 3, name: 'Café Latte', description: 'Café expreso con leche vaporizada, ideal para los amantes de la leche.', price: 120, image: 'https://images.unsplash.com/photo-1592250819999-c00fed586048?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9sc2ElMjBkZSUyMGNhZmV8ZW58MHwwfDB8fHww', quantity: 1 },
    { id: 4, name: 'Café Capuchino', description: 'Café expreso con una mezcla de leche vaporizada y espuma de leche.', price: 130, image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9sc2ElMjBkZSUyMGNhZmV8ZW58MHwwfDB8fHww', quantity: 1 },
    { id: 5, name: 'Café Mocha', description: 'Café con chocolate y leche, un deleite para los amantes del dulce.', price: 160, image: 'https://images.unsplash.com/photo-1712402832925-d41c446883d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', quantity: 1 },
    { id: 6, name: 'Café Frappé', description: 'Café frío y espumoso, ideal para los días calurosos.', price: 180, image: 'https://images.unsplash.com/photo-1630595478874-eefd5083f210?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', quantity: 1 },
];

}
