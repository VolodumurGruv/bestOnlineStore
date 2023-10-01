import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { configs } from '@configs/configs';
import { HttpErrorHandlerService } from './http-error-handler.service';
import { catchError } from 'rxjs';
import { Orders } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly http = inject(HttpClient);
  private readonly httpError = inject(HttpErrorHandlerService);

  getOrders() {
    this.http
      .get<Orders[]>(`${configs.URL}/order`)
      .pipe(
        catchError(
          this.httpError.handleError<Orders[]>('Помилка отримання замовленнь')
        )
      )
      .subscribe((res) => console.log(res));
  }

  makeOrder(order: Orders[]) {
    this.http
      .post<Orders[]>(`${configs.URL}/order`, order)
      .pipe(
        catchError(
          this.httpError.handleError<Orders[]>('Помилка отримання замовленнь')
        )
      )
      .subscribe((res) => console.log(res));
  }

  getOrderHistory() {
    this.http
      .get(`${configs.URL}/order/order-history`)
      .pipe(
        catchError(
          this.httpError.handleError<Orders[]>('Помилка отримання замовленнь')
        )
      )
      .subscribe((res) => console.log(res));
  }
}
