import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '@interfaces/product.interfaces';
import { Category, SubCategory } from '@interfaces/catalog.interface';
import { mainCategories } from '@interfaces/catalog.data';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(categoryPath: string): SubCategory | Category | null {
    const matchingCategory = mainCategories.find(
      (category: Category) => category.routerLink === categoryPath
    );

    if (matchingCategory) {
      return matchingCategory;
    } else {
      const matchingSubcategory = mainCategories
        .flatMap((category: Category) => category.subcategories || [])
        .find(
          (subcategory: SubCategory) => subcategory?.routerLink === categoryPath
        );

      if (matchingSubcategory) {
        const matchingParentCategory = mainCategories.find(
          (category: Category) =>
            category.subcategories?.includes(matchingSubcategory)
        );
        if (matchingParentCategory) {
          return matchingSubcategory;
        }
      }
    }
    return null;
  }

  getPathCategory(str: string): string | null {
    let path = 'Каталог';
    const matchingCategory = mainCategories.find(
      (category: Category) => category.routerLink === str
    );

    if (matchingCategory) {
      path += ` / ${matchingCategory.name}`;
    } else {
      const matchingSubcategory = mainCategories
        .flatMap((category: Category) => category.subcategories || [])
        .find((subcategory: SubCategory) => subcategory?.routerLink === str);

      if (matchingSubcategory) {
        const matchingParentCategory = mainCategories.find(
          (category: Category) =>
            category.subcategories?.includes(matchingSubcategory)
        );
        if (matchingParentCategory) {
          path += ` / ${matchingParentCategory.name} / ${matchingSubcategory.name}`;
        }
      }
    }
    return path || null;
  }

  getPathProduct(productId: number, subcategory: string | null): string | null {
    let path = 'Каталог';

    const matchingCategory = mainCategories.find((cat) =>
      cat.subcategories?.some((subcat) => subcat.routerLink === subcategory)
    );

    if (matchingCategory) {
      const matchingSubcategory = matchingCategory.subcategories?.find(
        (subcat) => subcat.routerLink === subcategory
      );

      const product = matchingSubcategory?.products?.find(
        (prod) => prod.id === productId
      );
      const subcategoryName = matchingSubcategory?.name;

      if (subcategoryName) {
        path += ` / ${subcategoryName}`;
      }
      if (product) {
        path += ` / ${product.name}`;
      }
    } else {
      const product = mainCategories
        .flatMap((cat) => cat.products || [])
        .find((prod) => prod.id === productId);
      if (product) {
        path += ` / ${product.name}`;
      }
    }

    return path || null;
  }

  getProductById(productId: number): Product | null {
    for (const category of mainCategories) {
      const productInCategory = category.products?.find(
        (product) => product.id === productId
      );
      if (productInCategory) {
        return productInCategory;
      }

      for (const subcategory of category.subcategories || []) {
        const productInSubcategory = subcategory.products?.find(
          (product) => product.id === productId
        );
        if (productInSubcategory) {
          return productInSubcategory;
        }
      }
    }

    return null;
  }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${configs.URL}/products`);
  // }
  //
  // getProductById(id: string | number): Observable<Product> {
  //   return this.http.get<Product>(`${configs.URL}/products/${id}`);
  // }
}
