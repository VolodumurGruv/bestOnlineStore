import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { configs, httpConfig } from 'src/app/configs/configs';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(user: User): Observable<User> {
    return this.http.get<User>(`${configs.URL}/users/all`).pipe(
      tap((data) => {
        console.log(data);
      })
    );
  }

  signup(user: User) {
    this.http
      .post<User>(`${configs.URL}/users/register`, user, httpConfig)
      .pipe(tap((res) => console.log(res)))
      .subscribe();
  }
}
