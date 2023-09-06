import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public authService = inject(AuthService);
  private router = inject(Router);

  logOut() {
    console.log(this.authService.isAuth());
    this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
