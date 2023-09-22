export interface User {
  name: string;
  password?: string;
  email: string;
  isAdmin?: boolean;
  token?: string;
  _id?: string;
}

export interface UserInfo extends User {
  lastName: string;
  address: string;
  phone: string;
}

export interface Orders {
  image: string;
  description: string;
  price: number;
  state: string;
  discount?: number | undefined;
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
