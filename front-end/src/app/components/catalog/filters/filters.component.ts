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

import { Filter, FilterCategory } from '@interfaces/filters-data';
import { PathStringService } from '@shared/services/interaction/path-string.service';
import { filters } from '@interfaces/filters-data';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';

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
  @Output() isClickFilterChange = new EventEmitter<boolean>();

  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);

  public filter!: FilterCategory;

  public filterNames = this.fb.group({
    name: this.fb.array([this.fb.group({ value: [''], checked: false })]),
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

  setValue(item: string, checked: any) {
    console.log(checked.value);
    this.name.value.forEach((val: any, i: number) => {
      if (val === item) {
        this.name.removeAt(i);
      }
    });

    if (!this.name.value.includes(item)) {
      this.name.push(this.fb.control(item));
    }
  }

  filterBy() {
    console.log(this.name.value);
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
