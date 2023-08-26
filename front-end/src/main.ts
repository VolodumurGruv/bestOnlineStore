import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { getAuth } from '@firebase/auth';

import { AppComponent } from './app/app.component';

import { AuthService } from './app/components/signin-flow/services/auth.service';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {
          path: '',
          loadChildren: () =>
            import('./app/app.routing').then((m) => m.APP_ROUTING),
        },
      ],
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })
    ),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig))
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true },
  ],
});
