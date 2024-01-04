import { Injectable } from '@angular/core';
import { DepData } from '@interfaces/department';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  private citiesData = new BehaviorSubject<DepData>({
    city: '',
    novaPoshtaAddress: '',
    deliveryMethod: '',
  });
  public citiesDataResult$ = this.citiesData.asObservable();

  cities(city: DepData) {
    this.citiesData.next(city);
  }
}
