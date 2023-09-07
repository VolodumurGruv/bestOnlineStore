import { Route } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

export const CATALOG_ROUTING: Route[] = [
  {
    path: 'catalog',
    loadComponent: () =>
      import('./categories/categories.component').then(
        (m) => m.CategoriesComponent
      ),
    children: [
      {
        path: ':subcategory',
        component: ProductComponent,
        children: [{ path: ':id', component: ProductsComponent }],
      },
    ],
  },
];
