import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orders } from '@interfaces/user.interface';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, TransformPricePipe],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  private readonly router = inject(Router);

  public orders: Orders[] = [];
  public advs: Orders[] = [];

  navigate() {
    this.router.navigate(['/']);
  }
}
