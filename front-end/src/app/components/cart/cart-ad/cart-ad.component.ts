import { Component, OnInit, inject } from '@angular/core';
import { NgFor } from '@angular/common';

import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { Orders } from '@interfaces/user.interface';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { Product } from '@interfaces/product.interfaces';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-cart-ad',
  standalone: true,
  imports: [NgFor, TransformPricePipe, ProductCardComponent],
  templateUrl: './cart-ad.component.html',
  styleUrls: ['./cart-ad.component.scss'],
})
export class CartAdComponent implements OnInit {
  private readonly productService = inject(ProductsService);
  public advs!: Product[];

  ngOnInit(): void {
    this.productService.getProductsApi().subscribe((res: any) => {
      console.log(res);
      this.advs = res.products;
    });
  }
  addToFavorite() {}
}
