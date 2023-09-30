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

  createOrder(order: Orders[]) {
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

  getOrderById(id: string) {
    this.http
      .get(`${configs.URL}/order/${id}`)
      .pipe(
        catchError(
          this.httpError.handleError<Orders>('Can not get order by id')
        )
      )
      .subscribe((res) => console.log(res));
  }

  updateOrder(id: string, order: Orders) {
    this.http
      .put<Orders>(`${configs.URL}/order/${id}/pay`, order)
      .pipe(
        catchError(this.httpError.handleError<Orders>('Can not update order'))
      )
      .subscribe((res) => console.log(res));
  }

  changeOrderStatus(id: string, status: string) {
    this.http
      .put(`${configs.URL}/order/${id}/status`, { status })
      .pipe(catchError(this.httpError.handleError('Can not change status')))
      .subscribe((res) => console.log(res));
  }

  deleteOrder(id: string) {
    this.http
      .delete(`${configs.URL}/order/${id}`)
      .pipe(catchError(this.httpError.handleError('Can not delete')))
      .subscribe((res) => console.log(res));
  }
}
