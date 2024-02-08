import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription, tap } from 'rxjs';

import { CarouselComponent } from './components/carousel/carousel.component';
import { AdvicesComponent } from './components/advices/advices.component';
import { ProductsService } from '@shared/services/products.service';
import { Product } from '@interfaces/product.interfaces';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    AdvicesComponent,
    ProductCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private productService: ProductsService
  ) {}

  private unSub = new Subscription();

  topProducts!: Product[];
  discountProducts!: Product[];
  newProducts!: Product[];

  ngOnInit(): void {
    this.unSub.add(
      this.productService
        .getAllProducts()
        .pipe(
          tap((res) => {
            this.topProducts = res
              .sort((a, b) => b.viewed - a.viewed)
              .slice(0, 3);
            this.discountProducts = res
              .filter((item) => item.discount > 0)
              .slice(0, 3);
            this.newProducts = res.filter((item) => item.new).slice(0, 3);
          })
        )
        .subscribe()
    );
  }

  redirect(path: string, dynamicPart?: string): void {
    const fullPath = dynamicPart ? [path, dynamicPart] : [path];
    this.router.navigate(fullPath);
  }

  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }
}
