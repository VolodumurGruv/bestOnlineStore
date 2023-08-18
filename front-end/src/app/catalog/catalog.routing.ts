import { Route } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

export const CATOLOG_ROUTING: Route[] = [
  {
    path: 'catalog',
    loadComponent: () =>
      import('./categories/categories.component').then(
        (m) => m.CategoriesComponent
      ),
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'product/:id', component: ProductComponent },
    ],
  },
];
