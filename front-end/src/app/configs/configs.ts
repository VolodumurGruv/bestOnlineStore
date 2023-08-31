import { HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'app/components/signin-flow/services/auth.interceptor';

export const configs = {
  URL: 'https://online-store-api-714z.onrender.com/api',
};

export const httpConfig = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

export const authInterceptors = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
