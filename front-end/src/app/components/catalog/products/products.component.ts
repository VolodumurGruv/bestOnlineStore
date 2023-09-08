import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Category, SubCategory } from '@interfaces/catalog.interface';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { CardComponent } from '../../home-page/components/card/card.component';
import { FiltersComponent } from '../filters/filters.component';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ProductCardComponent,
    FiltersComponent,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public isClickSort: boolean = false;
  public isClickFilter: boolean = false;
  public subcategory!: SubCategory | Category | null;
  public pathCategory!: string | null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe((urlSegments) => {
      console.log(urlSegments);
      const categoryPath = urlSegments[urlSegments.length - 1].path;
      this.subcategory = this.productService.getProducts(categoryPath);
      this.pathCategory = this.productService.getPathCategory(categoryPath);
    });
  }

  onIsClickFilterChange(newValue: boolean) {
    this.isClickFilter = newValue;
  }
}
