import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { AboutProductComponent } from './components/about-product/about-product.component';
import { FeaturesComponent } from './components/features/features.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { Product } from '@interfaces/product.interfaces';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ProductCardComponent,
    AboutProductComponent,
    FeaturesComponent,
    SimilarProductsComponent,
    FeedbacksComponent,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public product!: Product | null;
  public pathProduct!: string | null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const subcategory = params.get('subcategory');
      const idParam = params.get('id');
      const productId = idParam ? +idParam : null;
      if (productId) {
        this.product = this.productService.getProductById(productId);
        this.pathProduct = this.productService.getPathProduct(
          productId,
          subcategory
        );
      }
    });
  }
}
