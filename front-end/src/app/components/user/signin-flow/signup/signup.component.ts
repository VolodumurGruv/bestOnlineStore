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
export class SignupComponent implements OnDestroy {
  private unSub!: Subscription;

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
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  registerUser() {
    const { name, email, password } = this.signupForm.value;
    if (name && email && password) {
      // this.unSub = this.authService
      // .signup({ name, password, email })
      // .subscribe();
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

  ngOnDestroy(): void {
    if (this.unSub) this.unSub.unsubscribe();
  }
}
