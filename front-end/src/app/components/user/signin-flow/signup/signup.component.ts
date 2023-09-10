import { Component, DestroyRef, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { VisibilityIconComponent } from '@shared/components/icons/visibility-icon/visibility-icon.component';
import { AuthService } from '../../services/auth.service';
import { GoogleLoginComponent } from '../google-login/google-login.component';
import {
  confirmValidator,
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../../utils/validators';
import { ErrorValidationComponent } from '../../error-validation/error-validation.component';

type IsValid = {
  'box-danger': boolean | undefined;
  'box-success': boolean | undefined;
};

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    VisibilityIconComponent,
    ReactiveFormsModule,
    GoogleLoginComponent,
    ErrorValidationComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  public signupForm: FormGroup = this.fb.group({
    name: [
      null,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        nameValidator(),
      ],
    ],
    email: [null, [Validators.required, Validators.email, emailValidator()]],
    password: [
      null,
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        passwordValidator(),
        confirmValidator(),
      ],
    ],
    confirmPassword: [
      null,
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        passwordValidator(),
        confirmValidator(),
      ],
    ],
  });

  registerUser() {
    const { name, email, password } = this.signupForm.value;
    if (name && email && password) {
      this.authService
        .signup({ name, password, email })
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((res) => {
          if (res) {
            this.router.navigate(['/']);
          }
        });
    }
  }

  isValid(name: string): IsValid {
    return {
      'box-danger':
        !this.signupForm.get(name)?.valid && this.signupForm.get(name)?.touched,
      'box-success':
        this.signupForm.get(name)?.valid && this.signupForm.get(name)?.touched,
    };
  }

  isVisisble(input: { type: string }) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
