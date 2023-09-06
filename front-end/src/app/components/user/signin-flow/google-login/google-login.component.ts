import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Auth,
  authState,
  getRedirectResult,
  GoogleAuthProvider,
  idToken,
  signInWithRedirect,
  User,
  UserCredential,
  signOut,
} from '@angular/fire/auth';
import { AlertService } from '@shared/services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-google-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit {
  private provider = new GoogleAuthProvider();
  private auth: Auth = inject(Auth);
  private alert = inject(AlertService);
  private authService = inject(AuthService);
  private idToken$ = idToken(this.auth);
  private authState$ = authState(this.auth);

  ngOnInit(): void {
    if (!this.authService.isAuth()) {
      this.getStatus();
    }
  }

  googleLogin() {
    console.log(this.authService.isAuth());
    if (this.authService.isAuth()) {
      this.alert.warning("You've already logged in");
    } else {
      this.auth.languageCode = 'ua';
      signInWithRedirect(this.auth, this.provider);
    }
  }

  getStatus(): void {
    this.authState$.subscribe((user: User | null) => {
      console.log(user);
    });
    this.idToken$.subscribe((t: string | null) => {
      console.log(t);
    });

    getRedirectResult(this.auth)
      .then((result: UserCredential | null) => {
        if (result) {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          const user = result.user;
          console.log(user);
          console.log(credential);
          if (user.email && token) {
            this.authService.googleLogin({ email: user.email, gtoken: token });
          }
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(errorCode, errorMessage, email, credential);
        this.alert.danger('Login with Google', errorMessage);
      });
  }

  signOut(): void {
    signOut(this.auth)
      .then(() => {
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        this.alert.success("You've signed out successfully!");
      })
      .catch((error) => {
        console.log(error.message);
        this.alert.danger('Google sign out', error.message);
      });
  }
}
