import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forkJoin, map, switchMap } from 'rxjs';

import { ReviewService } from '@shared/services/review.service';
import { IconComponent } from '@shared/components/icon/icon.component';
import { Product, Review } from '@interfaces/product.interfaces';
import { UserService } from 'app/components/user/services/user.service';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-feedback-item',
  standalone: true,
  imports: [CommonModule, IconComponent, FormsModule, CommentComponent],
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.scss'],
})
export class FeedbackItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() feedbackLength = new EventEmitter<number>();
  private readonly reviewService = inject(ReviewService);
  private readonly userService = inject(UserService);
  isComment: boolean = false;
  answer = '';

  reviews: Review[] = [];

  ngOnInit(): void {
    if (this.product._id) {
      this.reviewService
        .getReview(this.product._id)
        .pipe(
          switchMap((res: any) => {
            this.reviews = res.payload.reviews;
            this.feedbackLength.emit(this.reviews.length);
            const userObservables = this.reviews.map((review: Review) => {
              return this.userService.getUserById(review.user);
            });

            return forkJoin(userObservables).pipe(
              map((users: any) => {
                this.reviews.forEach((review: Review, id: number) => {
                  if (users[id].user._id == review.user) {
                    this.reviews[id].userName = users[id].user.firstName;
                  }
                });
                return res;
              })
            );
          })
        )
        .subscribe();
    }
  }

  comment(id: number) {
    this.reviews[id].isComment = true;
  }

  addComment(id: number) {
    this.reviews[id].isComment = false;
  }

  like() {}
  dislike() {}
}
