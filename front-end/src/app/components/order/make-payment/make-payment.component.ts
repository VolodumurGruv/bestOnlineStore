import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';

@Component({
  selector: 'app-make-payment',
  standalone: true,
  imports: [CommonModule, TransformPricePipe],
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss'],
})
export class MakePaymentComponent {
  @Input() total = 0;

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  back() {
    this.router.navigate([{ outlets: { cart: ['cart'] } }]);
  }
}
