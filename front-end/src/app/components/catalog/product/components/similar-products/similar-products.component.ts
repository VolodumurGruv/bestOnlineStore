import {Component, Input, OnInit} from '@angular/core';

import {Product} from "../../../../../interfaces/product.interfaces";
import {NgForOf, NgIf} from "@angular/common";
import {ProductCardComponent} from "../../../../../shared/product-card/product-card.component";
import {ActivatedRoute, NavigationEnd, Router, RouterLink} from "@angular/router";
import {ProductsService} from "../../../../../shared/services/products.service";
import {Category, SubCategory} from "../../../../../interfaces/catalog.interface";

@Component({
  selector: 'app-similar-products',
  standalone: true,
  templateUrl: './similar-products.component.html',
  imports: [
    NgIf,
    ProductCardComponent,
    RouterLink,
    NgForOf
  ],
  styleUrls: ['./similar-products.component.scss']
})
export class SimilarProductsComponent implements OnInit {
  @Input() product!: Product;
  public similarProduct!: SubCategory | Category | null;
  public subcategory!: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productServices: ProductsService
  ) {}

  ngOnInit(): void {
    this.getSimilarProducts();
  }

  getSimilarProducts (): void {
    this.route.paramMap.subscribe(params => {
      this.subcategory = params.get('subcategory');
      if (this.subcategory) {
        this.similarProduct = this.productServices.getProducts(this.subcategory)
      }
    });
  }

  onProductClick(productId: number) {
    this.router.navigate(['/catalog', this.subcategory, productId]);
  }


}
