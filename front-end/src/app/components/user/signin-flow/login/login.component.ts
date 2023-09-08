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
    email: ['vova@mymail.com', [Validators.required, Validators.email]],
    password: ['voVA123vova', Validators.required],
    savePass: [],
  });
  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.authService.signIn(this.signinForm.value);
  }

  googleLogin() {}

  isVisisble(input: { type: string }) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }

  ngOnDestroy(): void {
    if (this.unSub) this.unSub.unsubscribe();
  }
}
