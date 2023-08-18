import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: '',
        loadChildren: () =>
          import('./app/app.routing').then((m) => m.APP_ROUTING),
      },
    ]),
  ],
});
