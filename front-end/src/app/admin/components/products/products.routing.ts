import { Route } from '@angular/router';

export const PRODUCTS_ROUTING: Route[] = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/admin/products', pathMatch: 'full' },
      {
        path: '',
        loadComponent: () =>
          import('./products.component').then((m) => m.ProductsComponent),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./product/product.component').then((m) => m.ProductComponent),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./add-product/add-product.component').then(
            (m) => m.AddProductComponent
          ),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('./add-product/add-product.component').then(
            (m) => m.AddProductComponent
          ),
      },
    ],
  },
];
