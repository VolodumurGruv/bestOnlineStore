import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ProductsService } from '@shared/services/products.service';
import { Product } from '@interfaces/product.interfaces';
import { EditProductItemComponent } from '../edit-product-item/edit-product-item.component';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, EditProductItemComponent],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly route = inject(ActivatedRoute);
  public product$!: Observable<Product>;

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productsService.getProductById(params.get('id')!)
      )
    );
  }
}
