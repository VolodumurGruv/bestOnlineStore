import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { ProductsService } from '@shared/services/products.service';
import { Product } from '@interfaces/product.interfaces';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  private readonly productService = inject(ProductsService);
  private readonly route = inject(ActivatedRoute);
  public product$!: Observable<Product>;

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productService.getProductById(params.get('id')!)
      )
    );
  }

  uploadImage(event: any, productId: string | undefined) {
    const file: File = event.target.files[0];

    if (productId && file) {
      this.productService
        .uploadImageProduct(file, productId)
        .subscribe((res) => console.log(res));
    }
  }
}
