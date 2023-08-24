import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AuthService } from './app/components/signin-flow/services/auth.service';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        loadChildren: () =>
          import('./app/app.routing').then((m) => m.APP_ROUTING),
      },
    ]),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
  ],
});
