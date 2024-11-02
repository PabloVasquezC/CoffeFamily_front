import { Component } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { Product } from '../../models/product/product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'], // Asegúrate de que sea 'styleUrls'
  providers: [
    provideHttpClient(withFetch()), // Esto debería ser correcto
    ProductService
  ]
})
export class ProductsPageComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log(this.products);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}
