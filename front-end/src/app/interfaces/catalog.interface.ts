import {Product} from "./product.interfaces";

export interface SubCategory {
  id: number;
  name: string;
  routerLink: string;
  products?: Product[];
}

export interface Category {
  id: number;
  name: string;
  routerLink: string;
  showSubcategories: boolean,
  subcategories?: SubCategory[];
  products?: Product[];
}
