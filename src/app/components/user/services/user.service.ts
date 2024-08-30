import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { configs } from '@configs/configs';
import { PAYLOAD } from '@interfaces/request.interface';
import { UserInfo } from '@interfaces/user.interface';
import { HttpErrorHandlerService } from '@shared/services/http-error-handler.service';
import { Observable, catchError, map, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly httpErrorHandler = inject(HttpErrorHandlerService);

  getUsers(): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${configs.URL}/user`).pipe(
      map((res: any) => res.payload),
      catchError(
        this.httpErrorHandler.handleError<UserInfo>(
          'Невдалося отримати користувачів!'
        )
      )
    );
  }

  getUserById(userID: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${configs.URL}/user/${userID}`).pipe(
      map((res: any) => {
        return res.payload;
      }),
      catchError(
        this.httpErrorHandler.handleError<UserInfo>(
          'Невдалося отримати користувача!'
        )
      )
    );
  }

  updateUser(userNew: UserInfo): Observable<UserInfo | PAYLOAD<UserInfo>> {
    return this.http
      .put<PAYLOAD<UserInfo>>(`${configs.URL}/user/profile`, userNew)
      .pipe(
        retry(3),
        map((res: PAYLOAD<UserInfo>) => {
          const user = res.payload.user;
          user.token = JSON.parse(localStorage.getItem('user')!).token;

          localStorage.setItem('user', JSON.stringify(user));
          return res.payload.user;
        }),
        catchError(
          this.httpErrorHandler.handleError<UserInfo>('Невдалося оновити дані!')
        )
      );
  }
}
