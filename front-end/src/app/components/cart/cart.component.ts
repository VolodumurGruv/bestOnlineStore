import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orders } from '@interfaces/user.interface';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { ActivatedRoute, Router } from '@angular/router';

type Counter = () => { '-': () => number; '+': () => number };

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, TransformPricePipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  public quantity = 1;
  public maxQuantity = 100;
  public minQuantity = 1;

  public orders: Orders[] = [
    {
      image:
        'https://img.freepik.com/premium-photo/blue-color-chair-product-image-web-page-scandinavian-design-clean-soft-chair-comfortable-with-copy-space-generatiev-ai_834602-16335.jpg',
      description: 'Кавовий столик Кавовий столикКавовий столик',
      amount: 1,
      price: 5500,
      discount: 6500,
    },
    {
      image:
        'https://img.freepik.com/premium-photo/blue-color-chair-product-image-web-page-scandinavian-design-clean-soft-chair-comfortable-with-copy-space-generatiev-ai_834602-16335.jpg',
      description: 'Кавовий столик ',
      amount: 1,
      price: 5500,
    },
  ];
  public advs: Orders[] = [
    {
      image:
        'https://img.freepik.com/premium-photo/blue-color-chair-product-image-web-page-scandinavian-design-clean-soft-chair-comfortable-with-copy-space-generatiev-ai_834602-16335.jpg',
      description: 'Кавовий столик ',
      amount: 1,
      price: 5500,
    },
  ];

  close() {
    this.router.navigate([{ outlets: { cart: null } }], {
      relativeTo: this.route.parent,
    });
  }

  increase() {}

  decrease() {}
}
