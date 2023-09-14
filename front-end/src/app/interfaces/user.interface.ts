export interface User {
  firstName: string;
  password: string;
  email: string;
  isAdmin?: boolean;
  token?: string;
}

export interface UserInfo extends User {
  lastName: string;
  address: string;
  phone: string;
}
