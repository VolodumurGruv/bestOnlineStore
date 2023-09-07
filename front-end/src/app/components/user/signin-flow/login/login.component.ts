import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '@shared/services/alert.service';
import { VisibilityIconComponent } from '@shared/components/icons/visibility-icon/visibility-icon.component';
import { GoogleLoginComponent } from '../google-login/google-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    VisibilityIconComponent,
    GoogleLoginComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  private unSub!: Subscription;

  public signinForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
    savePass: [],
  });
  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.unSub = this.authService
      .signIn(this.signinForm.value)
      .subscribe((res: any) => {
        localStorage.setItem('email', res.payload.email);
        localStorage.setItem('token', res.payload.token);
        localStorage.setItem('id', res.payload.token);
        console.log(res.password);
        this.alertService.success("You've logged in successfully");
      });
  }

  googleLogin() {}

  isVisisble(input: { type: string }) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }

  ngOnDestroy(): void {
    if (this.unSub) this.unSub.unsubscribe();
  }
}
