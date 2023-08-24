import { Route } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';

export const CATALOG_ROUTING: Route[] = [
  {
    path: 'catalog',
    loadComponent: () =>
      import('./categories/categories.component').then(
        (m) => m.CategoriesComponent
      ),
  },
  { path: 'catalog/:id', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
];
