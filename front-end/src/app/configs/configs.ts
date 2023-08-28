import { HttpHeaders } from '@angular/common/http';

export const configs = {
  URL: 'https://online-store-api-714z.onrender.com/api',
};

export const httpConfig = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json, application/html',
  }),
};
