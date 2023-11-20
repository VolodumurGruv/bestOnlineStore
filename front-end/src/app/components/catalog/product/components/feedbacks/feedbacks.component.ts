import { Component, inject } from '@angular/core';
import { NgForOf } from '@angular/common';
import { IconComponent } from '@shared/components/icon/icon.component';
import { ReviewService } from '@shared/services/review.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  templateUrl: './feedbacks.component.html',
  imports: [NgForOf, IconComponent, FormsModule],
  styleUrls: ['./feedbacks.component.scss'],
})
export class FeedbacksComponent {
  public feedback = '';
  public file!: any;

  private readonly reviewService = inject(ReviewService);

  addReview(review: any) {
    this.addReview(review);
  }
}
