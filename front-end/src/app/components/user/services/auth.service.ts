import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, take, tap } from 'rxjs';
import { Auth, signOut } from '@angular/fire/auth';

import { configs, httpConfig } from '@configs/configs';
import { User } from '@interfaces/user.interface';
import { AlertService } from '@shared/services/alert.service';
import { PAYLOAD } from '@interfaces/request.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private auth: Auth
  ) {}

  signIn(user: User): void {
    if (this.isAuth()) {
      this.alertService.warning('Вхід вже здійснено!');
      // check it later
    }
    this.http
      .post<User>(`${configs.URL}/user/signin`, user, httpConfig)
      .pipe(
        retry(3),

        catchError(this.handleError<User>(`Помилка входу. Повторіть спробу!] `))
      )
      .subscribe((res: any) => {
        if (res.payload) {
          this.setLocalStorage(res.payload);
        }
        this.alertService.success("You've logged in successfully");
      });
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(configs.URL + configs.REGISTER_ROOT, user).pipe(
      tap((res: any) => {
        const payload = res.payload;
        if (payload) {
          this.setLocalStorage(payload);
        }
      }),
      catchError(
        this.handleError<User>(
          `Виникла помилка під час реєстрації. Повторіть спробу!`
        )
      )
    );
  }

  googleLogin(body: { gtoken: string }): void {
    console.log(body);
    this.http
      .post(configs.URL + configs.GOOGLE_ROOT, body)
      .pipe(
        take(1),
        catchError(
          this.handleError<void>('Виникла помилка при здійсненні Google login!')
        )
      )
      .subscribe((res: any) => {
        if (res?.payload) {
          this.setLocalStorage(res?.payload);
        }
      });
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      this.alertService.danger(
        operation,
        // error.message.split(' ').splice(0, 3).join(' ')
        error?.error.text
      );

      return of(result as T);
    };
  }

  isAuth(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getAuthToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return null;
  }

  signOut(): void {
    // remove true
    if (this.isAuth()) {
      signOut(this.auth)
        .then(() => {
          localStorage.clear();
          this.alertService.success('Вихід здійснено успішно!');
        })
        .catch((error) => {
          console.log(error.message);
          this.alertService.danger(
            'Виникла помилка при виході!',
            error.message
          );
        });
    } else {
      this.alertService.warning('Ви маєте бути зареєстровані!');
    }
  }

  setLocalStorage(payload: PAYLOAD) {
    const expDate = new Date(new Date().getTime() + 360000);

    localStorage.setItem('token', payload.token);
    localStorage.setItem('id', payload._id);
    localStorage.setItem('email', payload.email);
    localStorage.setItem('expDate', expDate.toString());
  }
}
