import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import { VisibilityIconComponent } from '@shared/components/icons/visibility-icon/visibility-icon.component';
import { GoogleLoginComponent } from '../google-login/google-login.component';
import { emailValidator, passwordValidator } from '../../../utils/validators';
import { ErrorValidationComponent } from '../../error-validation/error-validation.component';
import { isValid } from '../../../utils/is-valid';

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
    ErrorValidationComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  public readonly isValid = isValid;

  public signinForm: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email, emailValidator()]],
    password: [null, [Validators.required, passwordValidator()]],
  });

  onSubmit() {
    this.authService.signIn(this.signinForm.value);
  }

  googleLogin() {}

  isVisisble(input: { type: string }) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
