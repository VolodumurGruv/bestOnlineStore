import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { configs } from '@configs/configs';
import { Product } from '@interfaces/product.interfaces';
import { PAYLOAD } from '@interfaces/request.interface';
import { HttpErrorHandlerService } from '@shared/services/http-error-handler.service';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class CartService {
  private readonly http = inject(HttpClient);
  private readonly handleError = inject(HttpErrorHandlerService);

  getCart(): Observable<Product> {
    return this.http.get<Product>(`${configs.URL}/cart/get-cart`);
  }

  makeOrder(productId: string, quantity: number = 1): Observable<PAYLOAD> {
    return this.http
      .post<PAYLOAD>(`${configs.URL}/order`, { productId, quantity })
      .pipe(
        catchError(
          this.handleError.handleError<PAYLOAD>(
            'Помилка додавання товару до кошику'
          )
        )
      );
  }
}
