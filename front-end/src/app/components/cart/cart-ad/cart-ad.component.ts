import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';

import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { Product } from '@interfaces/product.interfaces';
import { ProductsService } from '@shared/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-ad',
  standalone: true,
  imports: [NgFor, TransformPricePipe, ProductCardComponent],
  templateUrl: './cart-ad.component.html',
  styleUrls: ['./cart-ad.component.scss'],
})
export class CartAdComponent implements OnInit, OnDestroy {
  private readonly productService = inject(ProductsService);
  private unSub!: Subscription;
  public advs!: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res: any) => {
      console.log(res);
      this.advs = res.products;
    });
  }
  addToFavorite() {}

  ngOnDestroy(): void {
    if (this.unSub) this.unSub.unsubscribe();
  }
}
