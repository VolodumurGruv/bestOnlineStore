import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { FiltersComponent } from '../filters/filters.component';
import { CardComponent } from 'app/components/home-page/components/card/card.component';
import { Product } from '@interfaces/product.interfaces';
import { ProductsService } from '@shared/services/products.service';
import { Observable, Subscription, map, tap } from 'rxjs';

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
  private unSub!: Subscription;
  public isClickFilter: boolean = false;
  isClickSort = false;
  products!: Product[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}
  onIsClickFilterChange(newValue: boolean) {
    this.isClickFilter = newValue;
  }

  ngOnInit(): void {
    this.unSub = this.productService
      .getProducts()
      .pipe(map((res: Product[]) => (this.products = res)))
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.unSub) this.unSub.unsubscribe();
  }
}
