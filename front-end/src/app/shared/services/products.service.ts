import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { configs } from '@configs/configs';
import { catchError, map, Observable } from 'rxjs';
import { Product } from '@interfaces/product.interfaces';
import { HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly http = inject(HttpClient);
  private readonly errorHandler = inject(HttpErrorHandlerService);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${configs.URL}/product`).pipe(
      map((response: any) => response.payload?.products),
      catchError(
        this.errorHandler.handleError<Product[]>('Не вдалося отримати дані!')
      )
    );
  }

  getProductById(id: string): Observable<Product> {
    console.log(id)
    return this.http.get<Product>(`${configs.URL}/product/${id}`).pipe(
      map((response: any) => {
        console.log(response);
        return response.payload;
      }),

      catchError(
        this.errorHandler.handleError<Product>('Не вдалося отримати дані!')
      )
    );
  }
}
