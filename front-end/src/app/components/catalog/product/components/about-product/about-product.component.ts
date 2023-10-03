import { Component, Input, OnInit, inject } from '@angular/core';
import { NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Product } from '@interfaces/product.interfaces';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-product',
  standalone: true,
  templateUrl: './about-product.component.html',
  imports: [NgIf, NgFor, NgOptimizedImage, NgClass, TransformPricePipe],
  styleUrls: ['./about-product.component.scss'],
})
export class AboutProductComponent implements OnInit {
  @Input() product!: Product;

  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {}
}
