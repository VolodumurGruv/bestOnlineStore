import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { OrderService } from '@shared/services/order.service';
import { UserInfo } from '@interfaces/user.interface';
import { DeliveryService } from '@shared/services/interaction/department.service';
import { Subscription, tap } from 'rxjs';
import { DepData } from '@interfaces/department';

@Component({
  selector: 'app-make-payment',
  standalone: true,
  imports: [CommonModule, TransformPricePipe],
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss'],
})
export class MakePaymentComponent implements OnInit, OnDestroy {
  @Input() total = 0;
  @Input() order!: UserInfo;
  @Input() disabled: boolean = false;

  private readonly router = inject(Router);
  private readonly orderService = inject(OrderService);
  private readonly deliveryService = inject(DeliveryService);
  private unSub = new Subscription();

  public data!: DepData;
  dataValid: boolean | undefined = false;

  ngOnInit(): void {
    this.deliveryService.valid$.subscribe((b) => {
      this.disabled = b;
    });
    this.deliveryService.deliveryDataResult$.subscribe((b) => {
      this.dataValid = b.isValid;
    });
  }

  makeOrder() {
    this.deliveryService.deliveryDataResult$
      .pipe(tap((b) => (this.data = b)))
      .subscribe();

    // this.unSub.add(this.orderService.makeOrder(this.data).subscribe());
  }
  back() {
    this.router.navigate([{ outlets: { cart: ['cart'] } }]);
  }

  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }
}
