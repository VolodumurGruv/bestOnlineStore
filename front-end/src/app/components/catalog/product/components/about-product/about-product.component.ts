import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Subscription, concatMap, tap } from 'rxjs';

import { Product } from '@interfaces/product.interfaces';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { AuthService } from 'app/components/user/services/signin-flow/auth.service';
import { CartService } from 'app/components/cart/services/cart.service';
import { AlertService } from '@shared/services/interaction/alert.service';
import { WishlistService } from '@shared/services/wishlist.service';
import { IconComponent } from '@shared/components/icon/icon.component';
import { ProductsService } from '@shared/services/products.service';
import { User } from '@interfaces/user.interface';

@Component({
  selector: 'app-about-product',
  standalone: true,
  templateUrl: './about-product.component.html',
  imports: [
    NgIf,
    NgFor,
    NgOptimizedImage,
    NgClass,
    TransformPricePipe,
    IconComponent,
  ],
  styleUrls: ['./about-product.component.scss'],
  providers: [{ provide: CartService, useClass: CartService }],
})
export class AboutProductComponent implements OnInit, OnDestroy {
  @Input() product!: Product;

  private readonly userService = inject(AuthService);
  private readonly cartService = inject(CartService);
  private readonly alertService = inject(AlertService);
  private readonly wishService = inject(WishlistService);
  private readonly productService = inject(ProductsService);

  private unSub = new Subscription();

  ngOnInit(): void {
    this.unSub.add(
      this.productService
        .viewedProduct(this.product._id, { viewed: 1 })
        .subscribe((res) => console.log(res))
    );
  }

  addToCart(id: string, quantity: number) {
    const user: User = JSON.parse(localStorage.getItem('user')!);

    if (user?.expDate) {
      if (new Date(user?.expDate).getTime() < new Date().getTime()) {
        localStorage.clear();
      }
    }

    if (!this.userService.isAuth()) {
      this.unSub.add(
        this.userService
          .userAnonymous()
          .pipe(concatMap(() => this.cartService.makeOrder(id, quantity)))
          .subscribe()
      );
    } else {
      this.unSub.add(this.cartService.makeOrder(id, quantity).subscribe());
    }
  }

  addToWishList(productId: string | undefined) {
    if (productId) {
      this.unSub.add(
        this.wishService
          .addWishList(productId)
          .pipe(
            tap((res: any) => {
              if (res) this.alertService.success('Товар додано до обраного!');
            })
          )
          .subscribe()
      );
    }
  }

  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }
}
