import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleService } from '../services/google-service.service';

@Component({
  selector: 'app-google-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent {
  constructor(private googleAuth: GoogleService) {}
  googleLogin() {
    this.googleAuth.getUser().subscribe((user) => console.log(user));
    this.googleAuth.getState().subscribe((state) => console.log(state));
  }
}
