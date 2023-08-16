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
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./signin-flow/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
