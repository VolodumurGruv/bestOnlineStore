import {Component, Input, OnInit} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { TransformPricePipe } from '../../services/transform-price.pipe';
import {Product} from "@interfaces/product.interfaces";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TransformPricePipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  ngOnInit(): void {
  }

}
