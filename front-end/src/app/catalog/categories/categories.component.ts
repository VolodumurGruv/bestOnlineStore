import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { mainCategories } from "../../interfaces/catalog.data";
import { Category } from "../../interfaces/catalog.interface";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: Category[] = mainCategories;

  showSubcategories(category: Category) {
    category.showSubcategories = true;
  }

  hideSubcategories() {
    this.categories.forEach(category => category.showSubcategories = false);
  }
}
