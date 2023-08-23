export interface Product {
  id: number;
  name: string;
  descr: string;
  shortDescr: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  instock: boolean;
  countInStock: number;
  raiting: number;
  numReviews: number;
  sale?: boolean;
}
