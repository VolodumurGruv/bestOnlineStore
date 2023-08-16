export interface User {
  name: string;
  password: string;
  email: string;
  // maybe it's better to make the type number
  phone: string;
  isAdmin: boolean;
}
