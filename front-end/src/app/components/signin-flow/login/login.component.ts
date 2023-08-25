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
import { VisibilityIconComponent } from 'src/app/shared/components/icons/visibility-icon/visibility-icon.component';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';

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
export class LoginComponent implements OnDestroy {
  private unSub!: Subscription;

  public signinForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    savePass: [],
  });
  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService
  ) {}

  onSubmit() {
    this.authService.signIn(this.signinForm.value).subscribe(() => {
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
