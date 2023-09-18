export interface User {
  name: string;
  password: string;
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
