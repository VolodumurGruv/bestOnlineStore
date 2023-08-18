export interface Product {
  id: number;
  name: string;
  routerLink: string;
}

export interface Category {
  id: number;
  name: string;
  routerLink: string;
  showSubcategories: boolean,
  subcategories?: Product[];
}
