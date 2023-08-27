import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';

import { mainCategories } from '@interfaces/catalog.data';
import { SubCategory } from '@interfaces/catalog.interface';
import { CardComponent } from '../../home-page/components/card/card.component';
import { ProductCardComponent } from '../../../shared/product-card/product-card.component';
import { FiltersComponent } from '../filters/filters.component';
=======
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Category, SubCategory } from '@interfaces/catalog.interface';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { CardComponent } from '../../home-page/components/card/card.component';
import { FiltersComponent } from '../filters/filters.component';
import { ProductsService } from '@shared/services/products.service';
>>>>>>> google-login

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ProductCardComponent,
    FiltersComponent,
<<<<<<< HEAD
=======
    RouterLink,
>>>>>>> google-login
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public categoryName!: string;
  public subcategory!: SubCategory;
  public isClickSort: boolean = false;
  public isClickFilter: boolean = false;
<<<<<<< HEAD
=======
  public subcategory!: SubCategory | Category | null;
  public pathCategory!: string | null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegments) => {
      const categoryPath = urlSegments[urlSegments.length - 1].path;
      this.subcategory = this.productService.getProducts(categoryPath);
      this.pathCategory = this.productService.getPathCategory(categoryPath);
    });
  }
>>>>>>> google-login

  constructor(private route: ActivatedRoute) {}
  onIsClickFilterChange(newValue: boolean) {
    this.isClickFilter = newValue;
  }
  ngOnInit(): void {
    this.route.url.subscribe((urlSegments) => {
      const categoryPath = urlSegments[urlSegments.length - 1].path;

      const matchingSubcategory = mainCategories
        .flatMap((category) => category.subcategories || [])
        .find((subcategory) => subcategory?.routerLink === categoryPath);

      if (matchingSubcategory) {
        const matchingCategory = mainCategories.find((category) =>
          category.subcategories?.includes(matchingSubcategory)
        );

        if (matchingCategory) {
          this.categoryName = matchingCategory.name;
          this.subcategory = matchingSubcategory;
        }
      }
    });
  }
}
