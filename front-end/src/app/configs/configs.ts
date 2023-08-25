import { HttpHeaders } from "@angular/common/http";

export const configs = {
  URL: 'http://localhost:30000/api',
};

export const httpConfig = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}
