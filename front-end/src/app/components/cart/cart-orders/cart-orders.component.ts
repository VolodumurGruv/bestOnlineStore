import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { Orders } from '@interfaces/user.interface';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-orders',
  standalone: true,
  imports: [NgFor, TransformPricePipe, FormsModule],
  templateUrl: './cart-orders.component.html',
  styleUrls: ['./cart-orders.component.scss'],
})
export class CartOrdersComponent implements OnInit {
  public quantity = 1;
  public maxQuantity = 100;
  public minQuantity = 1;
  public total = 0;

  public orders: Orders[] = [
    {
      image:
        'https://img.freepik.com/premium-photo/blue-color-chair-product-image-web-page-scandinavian-design-clean-soft-chair-comfortable-with-copy-space-generatiev-ai_834602-16335.jpg',
      description: 'Кавовий столик Кавовий столикКавовий столик',
      quantity: 1,
      price: 5500,
      discount: 6500,
    },
    {
      image:
        'https://img.freepik.com/premium-photo/blue-color-chair-product-image-web-page-scandinavian-design-clean-soft-chair-comfortable-with-copy-space-generatiev-ai_834602-16335.jpg',
      description: 'Кавовий столик ',
      quantity: 1,
      price: 5500,
    },
  ];

  ngOnInit(): void {
    this.countTotal();
  }

  increase(id: number) {
    if (this.orders[id].quantity < this.maxQuantity) {
      this.orders[id].quantity += 1;
    }

    this.checkQuantity(this.orders[id]);
  }

  decrease(order: Orders) {
    if (order.quantity > this.minQuantity) {
      order.quantity -= 1;
    }

    this.checkQuantity(order);
  }

  checkQuantity(order: Orders) {
    if (order.quantity >= this.maxQuantity) {
      order.quantity = this.maxQuantity;
    }

    if (order.quantity <= this.minQuantity) {
      order.quantity = this.minQuantity;
    }
    this.countTotal();
  }

  countTotal(): void {
    let res = 0;
    this.orders.forEach((order: Orders) => {
      res += order.price;
      console.log(order.price);
    });
    this.total = res;
    console.log(this.total);
  }
}
