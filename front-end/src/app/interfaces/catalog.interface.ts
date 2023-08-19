import {Product} from "@interfaces/product.interfaces";
export interface SubCategory {
  name: string,
  routerLink: string
}
export interface Category {
  name: string,
  routerLink: string,
  showSubcategories: boolean,
  subcategories?: SubCategory[];
}
