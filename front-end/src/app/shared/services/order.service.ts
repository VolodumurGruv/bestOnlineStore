import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { configs } from '@configs/configs';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { Observable, catchError, tap } from 'rxjs';
import { Orders } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly http = inject(HttpClient);
  private readonly httpError = inject(HttpErrorHandlerService);

  getOrders(): Observable<Orders[]> {
    return this.http
      .get<Orders[]>(`${configs.URL}/order`)
      .pipe(
        catchError(
          this.httpError.handleError<Orders[]>('Помилка отримання замовленнь')
        )
      );
  }

  makeOrder(userId: string): Observable<Orders[]> {
    return this.http
      .post<Orders[]>(`${configs.URL}/order`, { user: userId })
      .pipe(
        tap((res) => console.log(res)),
        catchError(
          this.httpError.handleError<Orders[]>(
            'Помилка підтвердження замовлення'
          )
        )
      );
  }

  getOrderHistory(): Observable<Orders[]> {
    return this.http
      .get<Orders[]>(`${configs.URL}/order/order-history`)
      .pipe(
        catchError(
          this.httpError.handleError<Orders[]>('Помилка отримання замовленнь')
        )
      );
  }

  getOrderById(orderId: string) {}
}
