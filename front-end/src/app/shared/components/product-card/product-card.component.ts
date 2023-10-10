import { Component, Input, OnDestroy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { Product } from '@interfaces/product.interfaces';
import { TransformPricePipe } from '../../pipes/transform-price.pipe';
import { WishlistService } from '@shared/services/wishlist.service';
import { AlertService } from '@shared/services/interaction/alert.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, TransformPricePipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnDestroy {
  @Input() product!: Product;

  private readonly wishlistService = inject(WishlistService);
  private readonly alertService = inject(AlertService);
  private unSub!: Subscription;

  addToWishList(productId: string | undefined) {
    if (productId) {
      this.unSub = this.wishlistService
        .addWishList(productId)
        .subscribe(() => this.alertService.success('Додано до улюблених'));
    }
  }

  ngOnDestroy(): void {
    if (this.unSub) this.unSub.unsubscribe();
  }
}
