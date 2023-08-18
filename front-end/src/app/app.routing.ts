import { Routes } from '@angular/router';

export const APP_ROUTING: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home-page/home-page.component').then(
            (m) => m.HomePageComponent
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./catalog/catalog.routing').then((m) => m.CATOLOG_ROUTING),
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./blog/blog.component').then((m) => m.BlogComponent),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart/cart.component').then((m) => m.CartComponent),
      },
      {
        path: 'sales',
        loadComponent: () =>
          import('./sales/sales.component').then((m) => m.SalesComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./signin-flow/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
    ],
  },

  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.routing').then((m) => m.ADMIN_ROUTING),
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
