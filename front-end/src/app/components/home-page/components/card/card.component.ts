import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Category, SubCategory} from "../../../../interfaces/catalog.interface";
import {ProductCardComponent} from "../../../../shared/product-card/product-card.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterLink],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() mockData!: Category | SubCategory;

  constructor() {}
}
