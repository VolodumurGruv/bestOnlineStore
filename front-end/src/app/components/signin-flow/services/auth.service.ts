import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, Subject, tap } from 'rxjs';
import { configs, httpConfig } from 'src/app/configs/configs';
import { User } from 'src/app/interfaces/user.interface';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = true;
  constructor(private http: HttpClient, private alertService: AlertService) {}

  signIn(user: User): Observable<User> {
    return this.http.get<User>(`${configs.URL}/users/all`).pipe(
      tap((data) => {
        console.log(data);
      }),
      retry(3),
      catchError(this.handleError<User>(`sign in for ${user.name} `))
    );
  }

  signup(user: User) {
    this.http
      .post<User>(`${configs.URL}/users/register`, user, httpConfig)
      .pipe(
        tap((res) => console.log(res)),
        catchError(this.handleError<User>(`signup `))
      )
      .subscribe();
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
}
