import { Injectable } from '@angular/core';
import { Product } from '@interfaces/product.interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PathStringService {
  private pathCategory = new Subject<string>();
  private pathSubCategory = new Subject<string>();

  public pathCategory$ = this.pathCategory.asObservable();
  public pathSubCategory$ = this.pathSubCategory.asObservable();

  makePathCategory(product: Product) {
    if (product.category) {
      this.pathCategory.next(product.category);
    }
  }

  makePathSubCategory(product: Product) {
    if (product.subcategory) {
      this.pathSubCategory.next(product.subcategory);
    }
  }
}
