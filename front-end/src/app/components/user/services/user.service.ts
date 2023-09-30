import { HttpClient } from '@angular/common/http';
import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { configs } from '@configs/configs';
import { UserInfo } from '@interfaces/user.interface';
import { HttpErrorHandlerService } from '@shared/services/http-error-handler.service';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);
  private readonly httpErrorHandler = inject(HttpErrorHandlerService);

  getUsers(): Observable<UserInfo> {
    return this.http
      .get<UserInfo>(`${configs.URL}/user/all`)
      .pipe(
        catchError(
          this.httpErrorHandler.handleError<UserInfo>(
            'Невдалося отримати користувачів!'
          )
        )
      );
  }

  getUserById(userID: string): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${configs.URL}/user/${userID}`).pipe(
      map((res: any) => res),
      catchError(
        this.httpErrorHandler.handleError<UserInfo>(
          'Невдалося отримати користувача!'
        )
      )
    );
  }

  updateUser(user: any) {
    this.http
      .put(`${configs.URL}/user/profile`, user)
      .pipe(
        catchError(
          this.httpErrorHandler.handleError<UserInfo>('Невдалося оновити дані!')
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((res) => console.log(res));
  }
}
