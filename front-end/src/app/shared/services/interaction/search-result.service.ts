import { Injectable } from '@angular/core';
import { Product } from '@interfaces/product.interfaces';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchResultService {
  private searchResult = new BehaviorSubject<Product[]>([]);

  passResult(result: Product[]) {
    console.log(result);
    this.searchResult.next(result);
  }

  public searchResult$ = this.searchResult.asObservable();
}
