import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { map } from 'rxjs';

import { FilterCategory } from '@interfaces/filters-data';
import { filters } from '@interfaces/filters-data';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Product } from '@interfaces/product.interfaces';
import { ProductsService } from '@shared/services/products.service';
import { AlertService } from '@shared/services/interaction/alert.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() isClickFilter!: boolean;
  @Input() subCategory!: string;
  @Input() page!: string;
  @Input() currentPage!: number;
  @Input() products: Product[] = [];
  @Output() isClickFilterChange = new EventEmitter<boolean>();
  @Output() filteredProducts = new EventEmitter<Product[]>();

  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);
  private readonly productService = inject(ProductsService);
  private readonly alertService = inject(AlertService);

  private filteredSet: Set<Product> = new Set();
  private filtered: Product[] = [];

  public filter!: FilterCategory;

  public filterNames = this.fb.group({
    name: this.fb.array([this.fb.control('')]),
  });

  ngOnInit(): void {
    this.route.url
      .pipe(
        map((res: UrlSegment[]): FilterCategory => {
          const key = res[1].path;

          if (key in filters) {
            this.filter = (filters as any)[key] as FilterCategory;
          }

          return this.filter;
        })
      )
      .subscribe();
  }

  get name() {
    return this.filterNames.get('name') as FormArray;
  }

  setValue(item: string, checked: string) {
    if (checked === 'off') {
      const id = this.name.value.indexOf(item);
      this.name.removeAt(id);
    } else if (!this.name.value.includes(item)) {
      this.name.push(this.fb.control(item));
    }
  }

  filterBy() {
    const filters = this.filterNames.value.name;
    this.filteredSet.clear();

    if (filters) {
      filters.forEach((filter) => {
        this.products.forEach((product) => {
          product.characteristics?.forEach((item) => {
            if (item.value.toLowerCase() === filter?.toLowerCase()) {
              this.filteredSet.add(product);
            }
          });
        });
      });

      for (const item of this.filteredSet) {
        this.filtered.push(item);
      }

      if (this.filtered.length) {
        this.filteredProducts.emit(this.filtered);

        this.updateIsClickFilter();
      } else {
        this.alertService.warning('Співпадінь не має!');
      }
    }
  }

  isOpen(i: number) {
    if (!this.filter.subcategory[i].isChecked) {
      this.filter.subcategory[i].isChecked = true;
    } else {
      this.filter.subcategory[i].isChecked = false;
    }
  }

  clear() {
    this.filter.subcategory.forEach((item) => {
      item.isChecked = false;
    });

    while (this.name.value.length) {
      this.name.removeAt(this.name.value.length - 1);
    }
  }

  updateIsClickFilter() {
    this.isClickFilter = !this.isClickFilter;
    this.isClickFilterChange.emit(this.isClickFilter);
  }
}
