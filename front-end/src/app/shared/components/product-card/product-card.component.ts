import {Component, Input, OnInit} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

<<<<<<< HEAD:front-end/src/app/shared/product-card/product-card.component.ts
import { Product } from "../../interfaces/product.interfaces";
import {TransformPricePipe} from "../services/transform-price.pipe";
=======
import { Product } from '../../../interfaces/product.interfaces';
>>>>>>> front-end-login:front-end/src/app/shared/components/product-card/product-card.component.ts

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TransformPricePipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: Product;

<<<<<<< HEAD:front-end/src/app/shared/product-card/product-card.component.ts
=======
  transformPrice(price: number): string {
    const formattedPrice = new Intl.NumberFormat('uk-UA', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);

    return formattedPrice + ' ₴';
  }
>>>>>>> front-end-login:front-end/src/app/shared/components/product-card/product-card.component.ts
}
