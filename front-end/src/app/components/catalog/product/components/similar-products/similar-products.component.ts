import {Component, Input} from '@angular/core';

import {Product} from "../../../../../interfaces/product.interfaces";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-similar-products',
  standalone: true,
  templateUrl: './similar-products.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./similar-products.component.scss']
})
export class SimilarProductsComponent {
  @Input() product!: Product;
}
