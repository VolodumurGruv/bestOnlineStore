import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { FiltersComponent } from '../filters/filters.component';
import { CardComponent } from 'app/components/home-page/components/card/card.component';
import { Product } from '@interfaces/product.interfaces';
import { ProductsService } from '@shared/services/products.service';
import { PathStringService } from '@shared/services/interaction/path-string.service';
import { Subscription, map } from 'rxjs';
import { PathComponent } from '@shared/components/path/path.component';
import { svg } from '@interfaces/pictures-map';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ProductCardComponent,
    FiltersComponent,
    RouterLink,
    PathComponent,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnDestroy {
  private readonly productService = inject(ProductsService);
  public readonly pathString = inject(PathStringService);
  private unSub!: Subscription;
  public isClickFilter: boolean = false;
  private page = 'perPage';
  svg = svg;
  isClickSort = false;
  products!: Product[];
  subCategory!: string;
  currentPage = 1;

  onIsClickFilterChange(newValue: boolean) {
    this.isClickFilter = newValue;
  }

  passSubcategory(event: string) {
    this.subCategory = event;

    this.getProducts(this.page);
  }

  private getProducts(page: string): void {
    this.unSub = this.productService
      .getSubcategoryPerPage(page, this.currentPage, this.subCategory)
      .pipe(
        map((res: Product[]) => {
          console.log(res);
          this.products = res;
        })
      )
      .subscribe();
  }

  nextPage(): void {
    console.log(this.products.length);
    if (this.products.length >= 10) {
      this.currentPage += 1;
      this.getProducts(this.page);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.getProducts(this.page);
    }
  }

  ngOnDestroy(): void {
    if (this.unSub) this.unSub.unsubscribe();
  }
}
