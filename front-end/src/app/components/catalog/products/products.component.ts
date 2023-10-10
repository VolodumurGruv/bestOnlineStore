import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { FiltersComponent } from '../filters/filters.component';
import { CardComponent } from 'app/components/home-page/components/card/card.component';
import { Product } from '@interfaces/product.interfaces';
import { ProductsService } from '@shared/services/products.service';
import { PathStringService } from '@shared/services/interaction/path-string.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ProductCardComponent,
    FiltersComponent,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductsService);
  public readonly pathString = inject(PathStringService);
  private unSub!: Subscription;
  public isClickFilter: boolean = false;
  isClickSort = false;
  products!: Product[];
  category!: string;
  subCategory!: string;

  onIsClickFilterChange(newValue: boolean) {
    this.isClickFilter = newValue;
  }

  ngOnInit(): void {
    this.unSub = this.productService
      .getProducts()
      .pipe(
        map((res: Product[]) => {
          this.products = res;
          this.category = this.products[0].category;
          this.subCategory = this.products[0].subcategory;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.unSub) this.unSub.unsubscribe();
  }
}
