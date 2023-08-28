import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { VisibilityIconComponent } from '@shared/components/icons/visibility-icon/visibility-icon.component';
import { AuthService } from '../services/auth.service';
import { GoogleLoginComponent } from '../google-login/google-login.component';
import { AuthInterceptor } from '../services/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    VisibilityIconComponent,
    FormsModule,
    ReactiveFormsModule,
    GoogleLoginComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public signupForm: FormGroup = this.fb.group({
    name: ['Volodumur'],
    email: ['some@mail.com'],
    password: ['user123U-ser'],
    confirmPassword: [''],
  });
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  registerUser() {
    const { name, email, password } = this.signupForm.value;
    console.log({ name, email, password });
    this.authService.signup({ name, password, email });
  }

  isVisisble(input: { type: string }) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
