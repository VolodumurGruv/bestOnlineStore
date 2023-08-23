import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.interfaces';
import { configs } from 'src/app/configs/configs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${configs.URL}/products`);
  }

  getProductById(id: string | number): Observable<Product> {
    return this.http.get<Product>(`${configs.URL}/products/${id}`);
  }
}
