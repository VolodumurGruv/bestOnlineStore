import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { configs } from 'src/app/configs/configs';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(): Observable<User> {
    return this.http.get<User>(`${configs.URL}/all`).pipe(
      tap((data) => {
        console.log(data);
      })
    );
  }
}
