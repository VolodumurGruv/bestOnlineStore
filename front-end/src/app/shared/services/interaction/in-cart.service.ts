import { Injectable } from '@angular/core';
import { Orders } from '@interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InCartService {
  private productsInCart = new BehaviorSubject<Orders[]>([]);
  public productsInCart$ = this.productsInCart.asObservable();

  orders(order: Orders[]) {
    this.productsInCart.next(order);
  }
}
