import { Injectable } from '@angular/core';
import { DepData, Order } from '@interfaces/department';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeliveryService {
  private deliveryData = new BehaviorSubject<DepData>({ isValid: false });
  private valid = new BehaviorSubject<boolean>(false);
  private orderCounter = new BehaviorSubject<number>(0);
  private quantity = new BehaviorSubject<{ id: string; quantity: number }>({
    id: '',
    quantity: 1,
  });
  public deliveryDataResult$ = this.deliveryData.asObservable();
  public valid$ = this.valid.asObservable();
  public orderCounter$ = this.orderCounter.asObservable();
  public quantity$ = this.quantity.asObservable();

  delivery(city: DepData) {
    this.deliveryData.next(city);
  }

  isValid(state: boolean) {
    this.valid.next(state);
  }

  countOrder(value: number) {
    this.orderCounter.next(value);
  }

  quantityCounter(quantity: { id: string; quantity: number }) {
    this.quantity.next(quantity);
  }
}
