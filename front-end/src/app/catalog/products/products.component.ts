import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";

import { mainCategories } from "../../interfaces/catalog.data";
import { SubCategory } from "../../interfaces/catalog.interface";
import {CardComponent} from "../../home-page/components/card/card.component";
import {ProductCardComponent} from "../../shared/product-card/product-card.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public categoryName!: string;
  public subcategory!: SubCategory;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      const categoryPath = urlSegments[urlSegments.length - 1].path;

      const matchingSubcategory = mainCategories
        .flatMap(category => category.subcategories || [])
        .find(subcategory => subcategory?.routerLink === categoryPath);

      if (matchingSubcategory) {
        const matchingCategory = mainCategories.find(category =>
          category.subcategories?.includes(matchingSubcategory)
        );

        if (matchingCategory) {
          this.categoryName = matchingCategory.name;
          this.subcategory = matchingSubcategory;
          console.log(this.subcategory);
        }
      }
    });
  }

}
