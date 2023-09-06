import {
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { configs } from '@configs/configs';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

export const AuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const auth = inject(AuthService);
  const token = auth.getAuthToken();
  const url = req.url.split('/').includes(configs.DOMAIN);

  if (token && url) {
    const authToken = req.clone({
      headers: req.headers.set('Authorization', token),
    });
    return next(authToken);
  }
  return next(req);
};
