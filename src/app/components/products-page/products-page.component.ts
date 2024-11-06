import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product/product';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
  imports: [ProductCardComponent, CommonModule],
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
        console.log(this.products);
        this.cdRef.detectChanges();  // Forzar detección de cambios
        console.log('Products:', this.products);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}
