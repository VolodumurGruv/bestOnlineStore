import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {configs} from "@configs/configs";
import {map, Observable} from "rxjs";
import {Product} from "@interfaces/product.interfaces";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductsApi(): Observable<Product[]> {
    return this.http.get<any>(`${configs.URL}/api/product`).pipe(
      map(response => response.payload)
    );
  }

  getProductByIdApi(id: string | number): Observable<Product> {
    return this.http.get<any>(`${configs.URL}/api/product/${id}`).pipe(
      map(response => response.payload)
    );
  }
}
