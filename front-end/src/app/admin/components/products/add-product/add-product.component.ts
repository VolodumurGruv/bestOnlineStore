import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@interfaces/product.interfaces';
import { EditProductItemComponent } from '../edit-product-item/edit-product-item.component';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, EditProductItemComponent],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {}
