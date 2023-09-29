import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { ProductsService } from '@shared/services/products.service';
import { Product } from '@interfaces/product.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  private readonly productService = inject(ProductsService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  public products!: Product[];

  ngOnInit(): void {
    this.productService
      .getProductsApi()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res: any) => (this.products = res.products));
  }

  redirectToProduct(id: string) {
    this.router.navigate(['/admin/products/', id]);
  }
}
