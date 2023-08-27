import { Component, inject } from '@angular/core';
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
} from '@angular/fire/auth';
import { signOut } from '@firebase/auth';
import { AlertService } from '@shared/services/alert.service';

@Component({
  selector: 'app-google-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent {
  private provider = new GoogleAuthProvider();
  private auth: Auth = inject(Auth);
  private authState$ = authState(this.auth);
  private idToken$ = idToken(this.auth);
  private alert = inject(AlertService);

  googleLogin(): void {
    this.auth.languageCode = 'ua';
    signInWithRedirect(this.auth, this.provider);
  }

  getStatus() {
    this.authState$.subscribe((user: User | null) => {
      console.log(user);
    });
    this.idToken$.subscribe((t) => {
      console.log(t);
    });
    getRedirectResult(this.auth)
      .then((result: UserCredential | null) => {
        if (result) {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          const user = result.user;

          console.log(user, token);
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
      });
  }
  signOut(): void {
    signOut(this.auth)
      .then(() => {
        this.alert.success("You've signed out successfully!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}
