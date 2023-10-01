import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Orders } from '@interfaces/user.interface';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { InfoComponent } from 'app/components/user/components/info/info.component';
import { InfoFormComponent } from '@shared/components/info-form/info-form.component';

@Component({
  selector: 'app-cart-orders',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    TransformPricePipe,
    FormsModule,
    RouterLink,
    InfoComponent,
    InfoFormComponent,
  ],
  templateUrl: './cart-orders.component.html',
  styleUrls: ['./cart-orders.component.scss'],
})
export class CartOrdersComponent implements OnInit, AfterViewChecked {
  @Output() advertisement = new EventEmitter<boolean>();
  @ViewChild(InfoFormComponent) infoForm!: InfoFormComponent;

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly cartService = inject(CartService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  public maxQuantity = 100;
  public minQuantity = 1;
  public total = 0;

  public isComplete = true;
  public isAdv = true;
  public isCart = true;
  public isValid = false;

  public orders: Orders[] = [
    {
      _id: '64e7af152f011665dfd7f194',
      image:
        'https://img.freepik.com/premium-photo/blue-color-chair-product-image-web-page-scandinavian-design-clean-soft-chair-comfortable-with-copy-space-generatiev-ai_834602-16335.jpg',
      description: 'Кавовий столик Кавовий столикКавовий столик',
      quantity: 1,
      price: 5500,
      discount: 6500,
      summa: 5500,
    },
    {
      _id: '64e7cd1adeff9daacd5a62e2',
      image:
        'https://img.freepik.com/premium-photo/blue-color-chair-product-image-web-page-scandinavian-design-clean-soft-chair-comfortable-with-copy-space-generatiev-ai_834602-16335.jpg',
      description: 'Кавовий столик ',
      quantity: 1,
      price: 5500,
      summa: 5500,
    },
  ];

  ngOnInit(): void {
    this.countTotal();
    this.cartService.getCart();
    this.isCart = true;
  }

  ngAfterViewChecked(): void {
    if (!this.isComplete) {
      this.infoForm.infoForm.get('password')?.setErrors(null);

      this.isValid = this.infoForm.infoForm.valid;
      this.changeDetectorRef.detectChanges();
    }
  }

  increase(id: number) {
    if (this.orders[id].quantity < this.maxQuantity) {
      this.orders[id].quantity += 1;
      this.orders[id].summa = this.orders[id].price * this.orders[id].quantity;
    }

    this.checkQuantity(this.orders[id], id);
  }

  decrease(id: number) {
    if (this.orders[id].quantity > this.minQuantity) {
      this.orders[id].quantity -= 1;
      this.orders[id].summa = this.orders[id].price * this.orders[id].quantity;
    }

    this.checkQuantity(this.orders[id], id);
  }

  onKeyup(order: Orders, id: number) {
    this.checkQuantity(order, id);

    if (
      order.quantity <= this.maxQuantity &&
      order.quantity >= this.minQuantity
    ) {
      this.orders[id].quantity = order.quantity;
      this.orders[id].summa = this.orders[id].price * order.quantity;
    }

    this.countTotal();
  }

  checkQuantity(order: Orders, id: number) {
    if (order.quantity >= this.maxQuantity) {
      order.quantity = this.maxQuantity;
      this.orders[id].quantity = order.quantity;
    }

    if (order.quantity <= this.minQuantity) {
      order.quantity = this.minQuantity;
      this.orders[id].quantity = order.quantity;
    }

    this.countTotal();
  }

  countTotal(): void {
    let res = 0;
    this.orders.forEach((order: Orders) => (res += order.summa!));
    this.total = res;
  }

  delete(id: string | undefined) {
    this.orders = this.orders.filter((order: Orders) => order._id !== id);
    this.countTotal();
  }
  close() {
    this.router.navigate([{ outlets: { cart: null } }], {
      relativeTo: this.route.parent,
    });
  }

  completeOrder() {
    this.isComplete = false;
    this.advertisement.emit(false);
  }

  backToCart() {
    this.isComplete = true;
    this.advertisement.emit(true);
  }

  submit() {
    this.cartService.makeOrder('', 2);
  }
}
