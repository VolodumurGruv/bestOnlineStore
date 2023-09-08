export interface User {
  name: string;
  password: string;
  email: string;
  isAdmin?: boolean;
  token?: string;
}
