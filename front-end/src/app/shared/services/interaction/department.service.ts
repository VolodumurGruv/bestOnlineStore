import { Injectable } from '@angular/core';
import { DepData } from '@interfaces/department';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeliveryService {
  private deliveryData = new BehaviorSubject<DepData>({ isValid: false });
  private valid = new BehaviorSubject<boolean>(false);
  public deliveryDataResult$ = this.deliveryData.asObservable();
  public valid$ = this.valid.asObservable();

  delivery(city: DepData) {
    this.deliveryData.next(city);
  }

  isValid(state: boolean) {
    this.valid.next(state);
  }
}
