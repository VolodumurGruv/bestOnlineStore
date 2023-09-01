import {Product} from "@interfaces/product.interfaces";

export interface Category {
  category: string,
  showSubcategories: boolean,
  subcategories?: string[];
}
