import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../../interfaces/product.interfaces';
import { configs } from 'src/app/configs/configs';
import {Category, SubCategory} from "../../interfaces/catalog.interface";
import {mainCategories} from "../../interfaces/catalog.data";

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(categoryPath: string): SubCategory | Category | null {
    const matchingCategory = mainCategories.find((category: Category) =>
      category.routerLink === categoryPath
    );

    if (matchingCategory) {
      return matchingCategory;
    } else {
      const matchingSubcategory = mainCategories
        .flatMap((category: Category) => category.subcategories || [])
        .find((subcategory: SubCategory) => subcategory?.routerLink === categoryPath);

      if (matchingSubcategory) {
        const matchingParentCategory = mainCategories.find((category: Category) =>
          category.subcategories?.includes(matchingSubcategory)
        );
        if (matchingParentCategory) {
          return matchingSubcategory;
        }
      }
    }
    return null;
  }

  getPathCategory (str: string): string | null {
    let path = "Каталог";

    return path;
  }

  getPathProduct(id: number): string | null {
    let path = "Каталог";



    return path;
  }



  getProductById(id: number): Product | null  {

    const matchingProduct = mainCategories
      .flatMap((category: Category) => category.subcategories || [])
      .flatMap((subcategory: SubCategory) => subcategory.products || [])
      .find((product: Product) => product.id === id);

    return matchingProduct || null;
  }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${configs.URL}/products`);
  // }
  //
  // getProductById(id: string | number): Observable<Product> {
  //   return this.http.get<Product>(`${configs.URL}/products/${id}`);
  // }
}
