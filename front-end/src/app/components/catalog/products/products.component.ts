import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CardComponent } from '../../home-page/components/card/card.component';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    ProductCardComponent,
    FiltersComponent,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public isClickFilter: boolean = false;

  constructor(private route: ActivatedRoute) {}
  onIsClickFilterChange(newValue: boolean) {
    this.isClickFilter = newValue;
  }
  ngOnInit(): void {

  }
}
