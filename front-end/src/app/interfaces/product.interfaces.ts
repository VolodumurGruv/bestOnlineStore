export interface ProductCharacteristics {
  key: string;
  value: string;
}

export interface Product {
  characteristics?: ProductCharacteristics[];
  _id: string;
  name: string;
  descr: string;
  shortDescr: string;
  price: number;
  discount: number;
  baseImage: string;
  allImages: string[];
  brand: string;
  category: string;
  subcategory: string;
  instock: boolean;
  countInStock: number;
  rating?: number;
  numReviews?: number;
  reviews?: Review[];
  createdAt?: string;
  updatedAt?: string;
  new?: boolean;
  viewed: number;
  __v?: number;
}

export interface Review {
  _id: string;
  user: string;
  userName?: string;
  product: string;
  rating: number;
  comment: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  isComment?: boolean;
}
