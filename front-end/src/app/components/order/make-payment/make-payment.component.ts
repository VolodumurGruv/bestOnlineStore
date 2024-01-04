import { Component, Input, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { OrderService } from '@shared/services/order.service';
import { UserInfo } from '@interfaces/user.interface';
import { DepartmentService } from '@shared/services/interaction/department.service';
import { Subscription, map, switchMap, tap } from 'rxjs';
import { DepData } from '@interfaces/department';

@Component({
  selector: 'app-make-payment',
  standalone: true,
  imports: [CommonModule, TransformPricePipe],
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.scss'],
})
export class MakePaymentComponent implements OnDestroy {
  @Input() total = 0;
  @Input() order!: UserInfo;

  private readonly router = inject(Router);
  private readonly orderService = inject(OrderService);
  private readonly departmentService = inject(DepartmentService);
  private unSub = new Subscription();

  private data!: DepData;

  makeOrder() {
    this.departmentService.citiesDataResult$
      .pipe(tap((b) => (this.data = b)))
      .subscribe();

    this.unSub.add(this.orderService.makeOrder(this.data).subscribe());
  }
  back() {
    this.router.navigate([{ outlets: { cart: ['cart'] } }]);
  }

  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }
}
