import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { configs } from '@configs/configs';
import { UserInfo } from '@interfaces/user.interface';
import { HttpErrorHandlerService } from '@shared/services/http-error-handler.service';
import { Observable, catchError, config, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly httpErrorHandler = inject(HttpErrorHandlerService);

  getUsers(): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${configs.URL}/user/all`).pipe(
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
      map((res: any) => res.payload),
      catchError(
        this.httpErrorHandler.handleError<UserInfo>(
          'Невдалося отримати користувача!'
        )
      )
    );
  }

  updateUser(user: UserInfo): Observable<UserInfo> {
    return this.http.put<UserInfo>(`${configs.URL}/user/profile`, user).pipe(
      tap((res: any) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res.payload.user));
        localStorage.setItem('address', JSON.stringify(res.payload.address));
      }),
      catchError(
        this.httpErrorHandler.handleError<UserInfo>('Невдалося оновити дані!')
      )
    );
  }
}
