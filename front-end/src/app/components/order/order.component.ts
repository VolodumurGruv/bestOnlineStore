import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, map, tap } from 'rxjs';
import { Router } from '@angular/router';

import { Orders, UserInfo } from '@interfaces/user.interface';
import { UserService } from '../user/services/user.service';
import { CartService } from '../cart/services/cart.service';
import { PaymentComponent } from './payment/payment.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { DepartmentComponent } from './department/department.component';
import { OrdersComponent } from './orders/orders.component';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    PaymentComponent,
    MakePaymentComponent,
    DepartmentComponent,
    OrdersComponent,
  ],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit, OnDestroy {
  private readonly userService = inject(UserService);
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);
  private readonly unSub = new Subscription();

  public user!: UserInfo;
  public orders!: Orders[];
  public total!: number;
  public initialTotal!: number;

  ngOnInit(): void {
    this.router.navigate([{ outlets: { cart: null } }]);
    const user = JSON.parse(localStorage.getItem('user')!);
    this.user = user;

    this.unSub.add(
      this.userService
        .getUserById(user._id)
        .pipe(
          tap((item: any) => {
            this.user = item.user;
            localStorage.setItem('user', JSON.stringify(item.user));
          })
        )
        .subscribe()
    );

    this.unSub.add(
      this.cartService
        .getCart()
        .pipe(
          map((res: any) => {
            this.total = res.payload.totalPrice;
            this.initialTotal = res.payload.totalPrice;
            this.orders = res.payload.items.filter(
              (item: Orders) => item.quantity
            );
          })
        )
        .subscribe()
    );
  }

  calkTotal(event: number) {
    this.total = event;
  }

  deliveryPrice(event: number) {
    if (event) {
      this.total += event;
    } else {
      this.total = this.initialTotal;
    }
  }

  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }
}
