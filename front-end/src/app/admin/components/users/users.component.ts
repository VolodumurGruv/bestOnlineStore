import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterOutlet } from '@angular/router';

import { UserService } from 'app/components/user/services/user.service';
import { UserCardComponent } from './user-card/user-card.component';
import { UserInfo } from '@interfaces/user.interface';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserCardComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);
  private destroyRer = inject(DestroyRef);
  public users!: UserInfo[];

  ngOnInit(): void {
    this.userService
      .getUsers()
      .pipe(
        map((res: any) => (this.users = res.payload)),
        takeUntilDestroyed(this.destroyRer)
      )
      .subscribe();
  }

  userDetail(id: string | undefined) {
    this.router.navigate(['/admin/users/', id]);
  }
}
