import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute} from "@angular/router";

import {Product} from "../../../../../../../../src/app/interfaces/product.interfaces";
import {mainCategories} from "../../../../../../../../src/app/interfaces/catalog.data";
import {ProductCardComponent} from "../../../../../../../../src/app/shared/product-card/product-card.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product!: Product;
  categoryName: string | undefined;
  subcategoryName: string | undefined;
  features = [
    {nameFeature: "Матеріал: ", descFeature: "Високоякісна натуральна шкіра / м'який текстиль"},
    {nameFeature: "Наповнення:", descFeature: "Шар м'якого поролону та пружинна основа для максимального комфорту"},
    {nameFeature: "Розміри:", descFeature: "Ширина x Глибина x Висота: ___ см x ___ см x ___ см"},
    {nameFeature: "Колір:", descFeature: "Вибір з 3 доступних кольорів"},
    {nameFeature: "Ергономіка:", descFeature: "Підтримуюча форма спини та підлокітників для забезпечення комфортного сидіння "},
    {nameFeature: "Навантаження :", descFeature: "Максимальне навантаження до 200 кг"},
    {nameFeature: "Функції:", descFeature: "Наявність регульованої нахилу спинки, поворотності, можливості блокування позиції"},
    {nameFeature: "Додатково:", descFeature: "Варіанти з масажем, обігрівом, підставкою для ніг"},
    {nameFeature: "Догляд:", descFeature: "Легке очищення від пилу та бруду зі збереженням вигляду."},
  ]
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initializeProductFromRoute();
  }

  initializeProductFromRoute(): void {
    this.route.paramMap.subscribe(params => {
      const subcategory = params.get('subcategory');
      const idParam = params.get('id');
      const productId = idParam ? +idParam : null;

      const {subcategories, name: categoryName} = mainCategories.find(cat =>
        cat.subcategories?.some(subcat => subcat.routerLink === subcategory)
      ) || {subcategories: []};

      const {name: subcategoryName, products} = subcategories?.find(subcat => subcat.routerLink === subcategory)
      || {products: []};

      const product = products?.find(prod => prod.id === productId);

      if (product) {
        this.product = product;
        this.categoryName = categoryName;
        this.subcategoryName = subcategoryName;
      }
    });

  }

}






