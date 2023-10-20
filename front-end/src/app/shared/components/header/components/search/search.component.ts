import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '@shared/services/products.service';
import { Product } from '@interfaces/product.interfaces';
import { tap } from 'rxjs';
import { EnPathDirective } from '@shared/directives/en-path.directive';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, EnPathDirective, IconComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  private readonly productService = inject(ProductsService);
  private products!: Product[];

  public answer: Product[] = [];

  ngOnInit(): void {
    this.productService
      .getAllProducts()
      .pipe(tap((res) => (this.products = res)))
      .subscribe();
  }

  search(request: string) {
    const req = request.toLocaleLowerCase();

    this.answer = this.products.filter(
      (item) =>
        item.category.toLocaleLowerCase().slice(0, req.length) == req ||
        item.subcategory.toLocaleLowerCase().slice(0, req.length) == req ||
        item.name.toLocaleLowerCase().slice(0, req.length) == req
    );

    console.log(this.answer);
  }

  searchBtn(pr: string) {
    console.log(pr);
    this.productService.searchProduct(pr).subscribe((res) => console.log(res));
  }

  clearOnClick() {
    this.answer = [];
  }
}
