import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { configs } from '@configs/configs';
import { Orders } from '@interfaces/user.interface';
import { HttpErrorHandlerService } from '@shared/services/http-error-handler.service';
import { Observable, catchError, tap } from 'rxjs';

@Injectable()
export class CartService {
  private readonly http = inject(HttpClient);
  private readonly errorHandler = inject(HttpErrorHandlerService);

  getCart() {
    this.http
      .get(`${configs.URL}/cart/get-cart`)
      .subscribe((res) => console.log(res));
  }

  addToCart(productId: string | undefined, quantity: number) {
    console.log('make order');
    this.http
      .post(`${configs.URL}/cart/add-to-cart`, { productId, quantity })
      .pipe(
        tap((res) => {
          console.log(res, 'http client');
        }),
        catchError(this.errorHandler.handleError<Orders>('Order error '))
      )
      .subscribe();
  }

  clearCart() {
    this.http
      .delete(`${configs.URL}/cart/clear-cart`)
      .pipe(
        catchError(
          this.errorHandler.handleError('Error during deleting from cart')
        )
      )
      .subscribe((res) => console.log(res));
  }
}
