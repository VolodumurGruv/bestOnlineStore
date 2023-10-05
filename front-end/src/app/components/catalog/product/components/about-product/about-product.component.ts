import { Component, Input, OnInit, inject } from '@angular/core';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Product } from '@interfaces/product.interfaces';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { AuthService } from 'app/components/user/services/signin-flow/auth.service';
import { CartService } from 'app/components/cart/services/cart.service';
import { tap } from 'rxjs';
import { AlertService } from '@shared/services/interaction/alert.service';

@Component({
  selector: 'app-about-product',
  standalone: true,
  templateUrl: './about-product.component.html',
  imports: [NgIf, NgFor, NgOptimizedImage, NgClass, TransformPricePipe],
  styleUrls: ['./about-product.component.scss'],
  providers: [{ provide: CartService, useClass: CartService }],
})
export class AboutProductComponent implements OnInit {
  @Input() product!: Product;

  private readonly route = inject(ActivatedRoute);
  private readonly userService = inject(AuthService);
  private readonly cartService = inject(CartService);
  private readonly alertService = inject(AlertService);

  ngOnInit(): void {}

  addToCart(id: string, quantity: number) {
    if (!this.userService.isAuth()) {
      this.userService.userAnonymous().subscribe();
    }
    this.cartService
      .makeOrder(id, quantity)
      .pipe(
        tap((res: any) => {
          if (res) this.alertService.success('Товар додано до кошика успішно!');
        })
      )
      .subscribe();
  }
}
