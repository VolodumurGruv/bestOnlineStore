import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { NgIf } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './services/cart.service';
import { CartOrdersComponent } from './cart-orders/cart-orders.component';
import { CartAdComponent } from './cart-ad/cart-ad.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, CartOrdersComponent, CartAdComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @HostListener('document:click', ['$event']) onClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (target.className === 'shadow') {
      this.close();
    }
  }

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly elementRef = inject(ElementRef);
  isAdv = true;

  close() {
    this.router.navigate([{ outlets: { cart: null } }], {
      relativeTo: this.route.parent,
    });
  }

  advertisement(event: boolean) {
    this.isAdv = event;
  }
}
