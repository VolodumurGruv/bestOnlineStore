export interface REQUEST {
  body: PAYLOAD;
}

export interface PAYLOAD {
  name?: string;
  email: string;
  _id: string;
  token: string;
  expDate?: string;
}
