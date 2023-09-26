import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { configs } from '@configs/configs';

@Injectable()
export class CartService {
  private readonly http = inject(HttpClient);

  getCart() {
    this.http
      .get(`${configs.URL}/get-cart`)
      .subscribe((res) => console.log(res));
  }

  makeOrder(id: string, quantity: number) {
    this.http
      .post(`${configs.URL}/add-to-cart`, { id, quantity })
      .subscribe((res) => console.log(res));
  }
}
