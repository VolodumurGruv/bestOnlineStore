import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { configs } from '@configs/configs';
import { HttpErrorHandlerService } from '@shared/services/http-error-handler.service';
import { Observable, Subject, catchError } from 'rxjs';

@Injectable()
export class RecoverPassService {
  private readonly http = inject(HttpClient);
  private readonly httpErrorHandler = inject(HttpErrorHandlerService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  private recoverRes = new Subject<string>();
  public recoverRes$: Observable<string> = this.recoverRes.asObservable();

  recoverPass(email: string) {
    this.http
      .post(configs.URL + '/user/forgot-password', { email })
      .pipe(
        catchError(
          this.httpErrorHandler.handleError<void>(
            'Виникла помилка під час відновлення паролю!'
          )
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((res: any) => {
        if (res.message && res.text) {
          this.recoverRes.next(res.text);
          this.router.navigate(['/login', { token: 'token' }]);
        }
      });
  }

  setNewPass(token: string, newPassword: string) {
    this.http
      .post(configs.URL + '/user/reset-password', {
        newPassword,
        token,
      })
      .pipe(
        catchError(
          this.httpErrorHandler.handleError<void>(
            'Виникла помилка під час відновлення паролю!'
          )
        )
      )
      .subscribe((res: any) => {
        if (res.message && res.text) {
          this.recoverRes.next(res.text);
          this.router.navigate(['/login', { token: 'token' }]);
        }
      });
  }

  getRecoverRes(): Observable<string> {
    return this.recoverRes$;
  }
}
