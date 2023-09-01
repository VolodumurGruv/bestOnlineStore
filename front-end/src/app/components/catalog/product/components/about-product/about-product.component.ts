import {Component, Input} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';

import {TransformPricePipe} from '@shared/services/transform-price.pipe';
import {Product} from "@interfaces/product.interfaces";

@Component({
  selector: 'app-about-product',
  standalone: true,
  templateUrl: './about-product.component.html',
  imports: [NgIf, NgOptimizedImage, NgClass, TransformPricePipe],
  styleUrls: ['./about-product.component.scss'],
})
export class AboutProductComponent {
  @Input() product!: Product;
}
