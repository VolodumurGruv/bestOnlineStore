import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Product } from '@interfaces/product.interfaces';
import { ProductsService } from '@shared/services/products.service';
import { AlertService } from '@shared/services/interaction/alert.service';
import { setupInitialValue } from '@shared/utils/initial-from-local';
import { ErrorValidationComponent } from '@shared/components/error-validation/error-validation.component';
import { isValid } from '@shared/utils/is-valid';
import { ValidFormService } from '../valid-form.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorValidationComponent],
  templateUrl: './edit-product-item.component.html',
  styleUrls: ['./edit-product-item.component.scss'],
})
export class EditProductItemComponent implements OnInit, OnDestroy {
  @Input() product!: Product;
  @Input() isUpdate: boolean = false;
  @Input() isCreate: boolean = false;

  private readonly fb = inject(FormBuilder);
  private readonly productService = inject(ProductsService);
  private readonly alertService = inject(AlertService);
  public validFormService = inject(ValidFormService);
  public isValid = isValid;
  private readonly unSub = new Subscription();

  private allImagesFormArray = this.fb.array([this.fb.control('')]);

  public productForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    descr: ['', [Validators.required, Validators.minLength(4)]],
    shortDescr: ['', [Validators.required, Validators.minLength(4)]],
    price: ['0', [Validators.required, Validators.min(0)]],
    discount: ['0', [Validators.required, Validators.min(0)]],
    brand: ['', [Validators.required, Validators.minLength(4)]],
    category: ['', [Validators.required, Validators.minLength(4)]],
    subcategory: ['', [Validators.required, Validators.minLength(4)]],
    instock: ['true', [Validators.required]],
    countInStock: ['0', [Validators.required, Validators.min(0)]],
    baseImage: [''],
    allImages: this.allImagesFormArray,
    material: [''],
    filling: [''],
    sizes: [''],
    color: [''],
    ergonomics: [''],
    load: [''],
    functions: [''],
    additional: [''],
    care: [''],
  });

  get allImages() {
    return this.productForm.get('allImages') as FormArray;
  }

  ngOnInit(): void {
    if (this.product) {
      setupInitialValue(this.productForm, this.product);
    }

    if (this.product?.allImages.length) {
      this.product.allImages.forEach((image: string) => {
        this.allImagesFormArray.push(this.fb.control(image));
      });
    }
  }

  onSubmit() {
    if (this.isUpdate && this.product._id) {
      this.unSub.add(
        this.productService
          .updateProduct(this.productForm.value!, this.product._id)
          .subscribe(() => {
            this.alertService.success('Продукт успішно створено');
          })
      );
    }

    if (this.isCreate) {
      this.unSub.add(
        this.productService
          .createProduct(this.productForm.value)
          .subscribe(() => {
            this.alertService.success('Продукт успішно створено');
          })
      );
    }
  }

  addImageField() {
    this.allImagesFormArray.push(this.fb.control(''));
  }

  deleteImageField(i: number) {
    this.allImagesFormArray.removeAt(i);
  }

  ngOnDestroy(): void {
    this.unSub.unsubscribe();
    this.isCreate = false;
    this.isUpdate = false;
  }
}
