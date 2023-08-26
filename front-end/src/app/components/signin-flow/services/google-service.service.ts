import { inject, Injectable } from '@angular/core';
import { Auth, authState, user } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleService {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription!: Subscription;

  constructor() {}

  getUser() {
    return this.user$;
  }

  getState() {
    const authState$ = authState(this.auth);
    return authState$;
  }
}
