import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AdvicesComponent } from './components/advices/advices.component';
import { CardComponent } from './components/card/card.component';

import {ProductsService} from "@shared/services/products.service";
import {Category, SubCategory} from "@interfaces/catalog.interface";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CarouselComponent, AdvicesComponent, CardComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public categoryNew!: SubCategory | Category | null;
  public categoryShares!: SubCategory | Category | null;
  public categoryPopular!: SubCategory | Category | null;

  constructor(
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
   this.categoryNew = this.productService.getProducts('new');
   this.categoryShares = this.productService.getProducts('shares');
   this.categoryPopular = this.productService.getProducts('popular');
  }

  redirect(path: string, dynamicPart?: string): void {
    const fullPath = dynamicPart ? [path, dynamicPart] : [path];
    this.router.navigate(fullPath);
  }
}
