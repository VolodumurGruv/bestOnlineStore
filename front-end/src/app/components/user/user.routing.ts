import { Route } from '@angular/router';
import { authGuard } from './services/auth.guard';

export const USER_ROUTES: Route[] = [
  {
    path: 'user',
    loadComponent: () =>
      import('./user/user.component').then((m) => m.UserComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: '/user', pathMatch: 'full' },
      {
        path: '',
        loadComponent: () =>
          import('./info/info.component').then((m) => m.InfoComponent),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('./orders/orders.component').then((m) => m.OrdersComponent),
      },
      {
        path: 'reviews',
        loadComponent: () =>
          import('./reviews/reviews.component').then((m) => m.ReviewsComponent),
      },
    ],
  },
];
