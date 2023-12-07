import { Component, inject } from '@angular/core';
import { NgForOf } from '@angular/common';
import { IconComponent } from '@shared/components/icon/icon.component';
import { ReviewService } from '@shared/services/review.service';
import { FormsModule } from '@angular/forms';
import { Review } from '@interfaces/review.interface';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  templateUrl: './feedbacks.component.html',
  imports: [NgForOf, IconComponent, FormsModule],
  styleUrls: ['./feedbacks.component.scss'],
})
export class FeedbacksComponent {
  public feedback: string = '';
  public file!: string;

  private readonly reviewService = inject(ReviewService);

  addReview() {
    console.log(typeof this.file);
    // this.reviewService.addReview(review);
  }
}
