import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Type } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, retry } from 'rxjs';
import { Router } from '@angular/router';

import { Auth, signOut } from '@angular/fire/auth';
import { configs, httpConfig } from '@configs/configs';
import { User } from '@interfaces/user.interface';
import { AlertService } from '@shared/services/interaction/alert.service';
import { HttpErrorHandlerService } from '@shared/services/http-error-handler.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly alertService = inject(AlertService);
  private readonly googleAuth = inject(Auth);
  private readonly router = inject(Router);
  private readonly httpErrorHandler = inject(HttpErrorHandlerService);
  private user = new BehaviorSubject<User | null>(
    JSON.parse(localStorage.getItem('user')!)
  );
  private user$: Observable<User | null> = this.user.asObservable();

  signIn(user: User): Observable<User> {
    console.log(user);
    return this.http
      .post<User>(`${configs.URL}/user/signin`, user, httpConfig)
      .pipe(
        retry(3),
        map((res: any) => {
          const user = res.payload;

          this.setLocalStorage(user);
          this.user.next(user);
          return user;
        }),
        catchError(
          this.httpErrorHandler.handleError<User>(
            `Помилка входу. Повторіть спробу!] `
          )
        )
      );
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(configs.URL + configs.REGISTER_ROOT, user).pipe(
      map((res: any) => {
        const user = res.payload;
        this.setLocalStorage(user);
        this.user.next(user);
        return user;
      }),
      catchError(
        this.httpErrorHandler.handleError<User>(
          `Виникла помилка під час реєстрації. Повторіть спробу!`
        )
      )
    );
  }

  googleLogin(gtoken: string): Observable<User> {
    return this.http
      .post<User>(configs.URL + configs.GOOGLE_ROOT, { gtoken })
      .pipe(
        map((res: any) => {
          const user: User = res.payload;
          this.setLocalStorage(user);
          this.user.next(user);
          return user;
        }),
        catchError(
          this.httpErrorHandler.handleError<User>(
            'Виникла помилка при здійсненні Google login!'
          )
        )
      );
  }

  isAuth(): boolean {
    const user = this.user.value;
    console.log(JSON.parse(localStorage.getItem('user')!));
    let token = '';
    if (JSON.parse(localStorage.getItem('user')!)) {
      token = JSON.parse(localStorage.getItem('user')!)?.token;
    }

    return token === user?.token && token ? true : false;
  }

  signOut(): void {
    if (this.isAuth()) {
      signOut(this.googleAuth)
        .then(() => {
          localStorage.clear();
          this.user.next(null);
          this.router.navigate(['/']);
        })
        .catch((error) => {
          this.alertService.danger(
            'Виникла помилка при виході!',
            error.message
          );
        });
    } else {
      this.alertService.warning('Ви маєте бути зареєстровані!');
    }
  }

  setLocalStorage(payload: any) {
    // time for session 24h ahead
    const expDate = new Date(
      new Date().getTime() + 24 * 3600 * 1000
    ).toString();
    payload.signin = 'signin';
    payload.expDate = expDate;
    console.log(payload);
    localStorage.setItem('user', JSON.stringify(payload));
  }
}
