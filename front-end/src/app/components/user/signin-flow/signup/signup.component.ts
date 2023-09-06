import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { VisibilityIconComponent } from '@shared/components/icons/visibility-icon/visibility-icon.component';
import { AuthService } from '../../services/auth.service';
import { GoogleLoginComponent } from '../google-login/google-login.component';
import {
  confirmValidator,
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../../services/validators.directive';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    VisibilityIconComponent,
    ReactiveFormsModule,
    GoogleLoginComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnDestroy {
  private unSub!: Subscription;

  public signupForm: FormGroup = this.fb.group({
    name: [
      'Vasya Pupkin',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        nameValidator(),
      ],
    ],
    email: [
      'pupkin@mail.com',
      [Validators.required, Validators.email, emailValidator()],
    ],
    password: [
      'pupKin123,J',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        passwordValidator(),
      ],
    ],
    confirmPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        confirmValidator(),
      ],
    ],
  });
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  registerUser() {
    const { name, email, password } = this.signupForm.value;
    if (name && email && password) {
      this.unSub = this.authService
        .signup({ name, password, email })
        .subscribe();
    }
  }

  isVisisble(input: { type: string }) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }

  ngOnDestroy(): void {
    if (this.unSub) this.unSub.unsubscribe();
  }
}
