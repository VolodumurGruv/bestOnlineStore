import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, map, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { Orders, UserInfo } from '@interfaces/user.interface';
import { UserService } from '../user/services/user.service';
import { CartService } from '../cart/services/cart.service';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { IconComponent } from '@shared/components/icon/icon.component';
import { NovaPoshtaComponent } from './nova-poshta/nova-poshta.component';
import { UkrPoshtaComponent } from './ukr-poshta/ukr-poshta.component';
import { CourierComponent } from './courier/courier.component';
import { SelfPickupComponent } from './self-pickup/self-pickup.component';
import { InputCheckBoxComponent } from '@shared/components/inputs/input-check-box/input-check-box.component';
import { deliveryData } from '@configs/delivery-data';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    TransformPricePipe,
    IconComponent,
    FormsModule,
    NovaPoshtaComponent,
    UkrPoshtaComponent,
    CourierComponent,
    SelfPickupComponent,
    InputCheckBoxComponent,
    PaymentComponent,
  ],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  private readonly userService = inject(UserService);
  private readonly cartService = inject(CartService);
  private readonly unSub = new Subscription();

  public user!: UserInfo;
  public orders!: Orders[];
  public total!: number;
  public minQuantity: number = 1;
  public maxQuantity: number = 100;
  public readonly deliveryData = deliveryData;

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user')!);
    this.user = user;

    this.userService
      .getUserById(user._id)
      .subscribe((user) => console.log(user._id));

    this.cartService
      .getCart()
      .pipe(
        map((res: any) => {
          console.log(res);
          this.total = res.payload.totalPrice;
          this.orders = res.payload.items.filter(
            (item: Orders) => item.quantity
          );
        })
      )
      .subscribe();
  }

  increase(id: string | undefined, quantity: number) {
    if (id && quantity) {
      this.unSub.add(
        this.cartService
          .makeOrder(id, quantity + 1)
          .pipe(
            tap(() => {
              this.getCartOrders();
            })
          )
          .subscribe()
      );
    }
  }

  decrease(id: string | undefined, quantity: number) {
    if (id && quantity) {
      this.unSub.add(
        this.cartService
          .makeOrder(id, quantity - 1)
          .pipe(
            tap(() => {
              this.getCartOrders();
            })
          )
          .subscribe()
      );
    }
  }

  getCartOrders() {
    this.unSub.add(
      this.cartService
        .getCart()
        .pipe(
          map((res: any) => {
            this.total = res.payload.totalPrice;
            this.orders = res.payload.items.filter(
              (item: Orders) => item.quantity
            );
          })
        )
        .subscribe()
    );
  }

  onCheckBox(event: boolean, id: number) {
    this.deliveryData.forEach((item, i) => {
      if (id !== i) {
        this.deliveryData[i].isChecked = event;
      }
    });
  }
}
