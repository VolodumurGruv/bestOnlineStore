import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Product } from '@interfaces/product.interfaces';
import { ProductsService } from '@shared/services/products.service';
import { Router } from '@angular/router';
import { AlertService } from '@shared/services/interaction/alert.service';
import { setupInitialValue } from '@shared/utils/initial-from-local';

@Component({
  selector: 'app-edit-product-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-product-item.component.html',
  styleUrls: ['./edit-product-item.component.scss'],
})
export class EditProductItemComponent implements OnInit {
  @Input() product!: Product;

  private readonly fb = inject(FormBuilder);
  private readonly productService = inject(ProductsService);
  private readonly router = inject(Router);
  private readonly alertService = inject(AlertService);

  public productForm = this.fb.nonNullable.group({
    name: [''],
    descr: [''],
    shortDescr: [''],
    price: [''],
    discount: [''],
    brand: [''],
    category: [],
    subcategory: [''],
    instock: [''],
    countInStock: [''],
    baseImage: [''],
    allImages: this.fb.array([this.fb.control('')]),
  });

  get allImages() {
    return this.productForm.get('allImages') as FormArray;
  }

  ngOnInit(): void {
    if (this.product) {
      setupInitialValue(this.productForm, this.product);
    }
  }

  onSubmit() {
    this.productService.createProduct(this.productForm.value).subscribe(() => {
      this.alertService.success('Продукт успішно створено');
    });

    // if (this.product._id) {
    //   this.productService
    //     .updateProduct(this.productForm.value!, this.product._id)
    //     .subscribe(() => {
    //       this.alertService.success('Продукт успішно створено');
    //     });
    // }
  }

  cancel() {
    this.router.navigate(['/admin/products']);
  }
}
