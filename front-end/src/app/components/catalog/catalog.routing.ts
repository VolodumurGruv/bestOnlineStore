import {Route} from '@angular/router';

import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";


export const CATALOG_ROUTING: Route[] = [
  {
    path: 'catalog',
    loadComponent: () =>
      import('./categories/categories.component').then(
        (m) => m.CategoriesComponent
      ),
  },
  { path: 'catalog/:subcategory/:id', component: ProductComponent },
  { path: 'catalog/:subcategory', component: ProductsComponent },
];
