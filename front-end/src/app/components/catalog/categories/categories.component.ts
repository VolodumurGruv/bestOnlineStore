import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Category } from '@interfaces/catalog.interface';
import {categoriesArray} from "@interfaces/catalog.data";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: Category[] = categoriesArray;

  showSubcategories(category: Category) {
    category.showSubcategories = true;
  }

  hideSubcategories() {
    this.categories.forEach((category) => (category.showSubcategories = false));
  }
}
