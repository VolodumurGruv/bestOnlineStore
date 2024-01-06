import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orders } from '@interfaces/user.interface';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { Subscription, map, tap } from 'rxjs';
import { CartService } from 'app/components/cart/services/cart.service';
import { IconComponent } from '@shared/components/icon/icon.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, TransformPricePipe, IconComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  @Input() orders!: Orders[];
  @Output() total = new EventEmitter<number>();

  private readonly cartService = inject(CartService);
  private readonly unSub = new Subscription();

  public minQuantity: number = 1;
  public maxQuantity: number = 100;

  increase(id: string | undefined, quantity: number) {
    if (id && quantity) {
      this.makeCartOrders(id, quantity + 1);
    }
  }

  decrease(id: string | undefined, quantity: number) {
    if (id && quantity) {
      this.makeCartOrders(id, quantity - 1);
    }
  }

  private makeCartOrders(id: string, quantity: number) {
    this.unSub.add(
      this.cartService
        .makeOrder(id, quantity)
        .pipe(
          tap(() => {
            this.getCartOrders();
          })
        )
        .subscribe()
    );
  }

  private getCartOrders() {
    this.unSub.add(
      this.cartService
        .getCart()
        .pipe(
          map((res: any) => {
            this.total.emit(res.payload.totalPrice);
            this.orders = res.payload.items.filter(
              (item: Orders) => item.quantity
            );
          })
        )
        .subscribe()
    );
  }
}
