import { Component, Input } from '@angular/core';
import { Product } from '../../models/product/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  constructor() { }

  @Input() product: Product | undefined;
}
