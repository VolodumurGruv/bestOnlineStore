import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'app/components/user/services/signin-flow/auth.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class CommentComponent implements OnInit {
  @Output() addComment = new EventEmitter<boolean>();
  private authService = inject(AuthService);

  public userName: string = '';
  public comment: string = '';

  ngOnInit(): void {
    if (this.authService.isAuth()) {
      console.log(JSON.parse(localStorage.getItem('user')!).firstName);
    }
  }
}
