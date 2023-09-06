import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, tap } from 'rxjs';
import { configs, httpConfig } from '@configs/configs';
import { User } from '@interfaces/user.interface';
import { AlertService } from '@shared/services/alert.service';
import { Auth, signOut } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    private alertService: AlertService,
    private auth: Auth,
    private alert: AlertService
  ) {}

  signIn(user: User): Observable<User> {
    if (this.isAuth()) {
      this.alertService.warning('User is already logged in');
      // check it later
      return of();
    }
    return this.http
      .post<User>(`${configs.URL}/user/signin`, user, httpConfig)
      .pipe(
        retry(3),
        catchError(this.handleError<User>(`sign in for ${user.name} `))
      );
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(configs.URL + configs.REGISTER_ROOT, user).pipe(
      tap((res: any) => {
        const payload = res.payload;

        localStorage.setItem('token', payload.token);
        localStorage.setItem('id', payload._id);
        localStorage.setItem('email', payload.email);
      }),
      catchError(this.handleError<User>(`signup `))
    );
  }

  googleLogin(body: any): void {
    this.http
      .post(configs.URL + configs.GOOGLE_ROOT, JSON.stringify({ body }))
      .pipe(
        tap((res: any) => {
          console.log(res);
        }),
        catchError(this.handleError<void>('Google login'))
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      this.alertService.danger(
        operation,
        // error.message.split(' ').splice(0, 3).join(' ')
        error.statusText
      );

      return of(result as T);
    };
  }

  isAuth(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  signOut(): void {
    // remove true
    if (this.isAuth() || true) {
      signOut(this.auth)
        .then(() => {
          localStorage.removeItem('email');
          localStorage.removeItem('token');
          localStorage.removeItem('id');
          this.alert.success("You've signed out successfully!");
        })
        .catch((error) => {
          console.log(error.message);
          this.alert.danger('Google sign out', error.message);
        });
    } else {
      this.alert.warning('You should be logged in');
    }
  }
}
