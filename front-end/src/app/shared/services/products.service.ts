import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly URL: string = 'http://4200/api';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}/products`);
  }

  getProductById(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${this.URL}/products/${id}`);
  }
}
