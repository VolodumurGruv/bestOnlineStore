export interface User {
  name?: string | null | undefined;
  password?: string | null;
  email?: string | null | undefined;
  isAdmin?: boolean;
  isAnonymous?: boolean;
  token?: string;
  _id?: string;
}

export interface UserInfo extends User {
  lastName?: string | null;
  address?: string | null | undefined;
  phone?: string | null;
  delivery?: string | null;
  department?: string | null;
  wishList?: string[];
}

export interface Orders {
  _id: string;
  image: string;
  description: string;
  price: number;
  state?: string;
  discount?: number | undefined;
  quantity: number;
  summa?: number;
}

export interface Review {
  title: string;
  date: string;
  rate: number;
  images: string[];
  text: string;
  advantage?: string;
  disadvantage?: string;
  likes: number;
  dislikes: number;
}
