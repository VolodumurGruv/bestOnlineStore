import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {AppComponent} from './app/app.component';

import { AuthService } from './app/components/signin-flow/services/auth.service';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
        {
          path: '',
          loadChildren: () =>
            import('./app/app.routing').then((m) => m.APP_ROUTING),
        }],
      withInMemoryScrolling({scrollPositionRestoration: 'enabled'})
    ),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
  ],
});
