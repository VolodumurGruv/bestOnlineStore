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
import {
  Product,
  ProductCharacteristics,
} from '@interfaces/product.interfaces';

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
  @Input() products: Product[] = [];
  @Output() isClickFilterChange = new EventEmitter<boolean>();
  @Output() filteredProducts = new EventEmitter<Product[]>();

  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);

  public filter!: FilterCategory;

  public filterNames = this.fb.group({
    name: this.fb.array([this.fb.control('')]),
  });

  ngOnInit(): void {
    this.route.url
      .pipe(
        map((res: UrlSegment[]): FilterCategory => {
          const key = res[1].path;
          console.log(key);

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
    let filteredProducts: Product[] | undefined = [];
    this.name.value.forEach((filter: string) => {
      console.log(filter);
      filteredProducts = this.products.filter((product) =>
        product.characteristics?.some(
          (characteristic) =>
            characteristic.value.toLowerCase() == filter.toLowerCase()
        )
      );
    });

    if (filteredProducts.length) {
      this.filteredProducts.emit(filteredProducts);
    } else {
      this.filteredProducts.emit([]);
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
