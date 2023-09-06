import { Routes } from '@angular/router';
import { authGuard } from './components/user/services/auth.guard';

export const APP_ROUTING: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/home-page/home-page.component').then(
            (m) => m.HomePageComponent
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./components/catalog/catalog.routing').then(
            (m) => m.CATALOG_ROUTING
          ),
      },
      {
        path: 'blog',
        loadComponent: () =>
          import('./components/blog/blog.component').then(
            (m) => m.BlogComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./components/cart/cart.component').then(
            (m) => m.CartComponent
          ),
      },
      {
        path: 'sales',
        loadComponent: () =>
          import('./components/sales/sales.component').then(
            (m) => m.SalesComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./components/about/about.component').then(
            (m) => m.AboutComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/user/signin-flow/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./components/user/signin-flow/signup/signup.component').then(
            (m) => m.SignupComponent
          ),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('./components/user/user/user.component').then(
            (m) => m.UserComponent
          ),
        canActivate: [authGuard],
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
