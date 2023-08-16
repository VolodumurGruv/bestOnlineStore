import {
  HttpRequest,
  HttpEvent,
  HttpInterceptorFn,
  HttpHandlerFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { configs } from '@configs/configs';
import { SpinnerService } from '@shared/services/spinner.service';
import { finalize, Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

export const AuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const auth = inject(AuthService);
  const spinner = inject(SpinnerService);
  const token = auth.getAuthToken();
  const url = req.url.split('/').includes('google');

  spinner.enableSpinner();

  if (token && !url) {
    console.log(url);
    const authToken = req.clone({
      headers: req.headers.set('Authorization', token),
    });
    return next(authToken).pipe(finalize(() => spinner.disableSpinner()));
  }
  return next(req).pipe(finalize(() => spinner.disableSpinner()));
};
