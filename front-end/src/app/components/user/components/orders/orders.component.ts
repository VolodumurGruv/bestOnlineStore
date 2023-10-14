import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orders } from '@interfaces/user.interface';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { OrderService } from '@shared/services/order.service';
import { tap } from 'rxjs';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, TransformPricePipe],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  private readonly orderService = inject(OrderService);
  public orders: Orders[] = [];

  ngOnInit(): void {
    this.orderService
      .getOrderHistory()
      .pipe(
        tap((res) => {
          this.orders = res;
          console.log(this.orders);
        })
      )
      .subscribe();
  }

  completeAction(id: string): void {
    this.orderService.deleteOrder(id).subscribe();
  }
}
