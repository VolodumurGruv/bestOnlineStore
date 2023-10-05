import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@interfaces/product.interfaces';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '@shared/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  private readonly fb = inject(FormBuilder);
  private readonly productService = inject(ProductsService);
  private readonly router = inject(Router);

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
  });

  uploadImage(event: any) {
    const file: File = event.target.files[0];

    this.productService
      .uploadImageProduct(file)
      .subscribe((res) => console.log(res));
  }

  onSubmit() {
    this.productService
      .createProduct(this.productForm.value)
      .subscribe((res) => console.log(res));
  }

  cancel() {
    this.router.navigate(['/admin/products']);
  }
}
