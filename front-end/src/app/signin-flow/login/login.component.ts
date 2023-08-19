import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VisibilityIconComponent } from 'src/app/shared/icons/visibility-icon/visibility-icon.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    VisibilityIconComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public signinForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    savePass: [],
  });
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  onSubmit() {
    const { email, password } = this.signinForm.value;

    console.log(this.signinForm.value);
    if (email && password) {
      this.authService.signIn().subscribe();
    }
  }

  googleLogin() {}

  isVisisble(input: { type: string }) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }
}
