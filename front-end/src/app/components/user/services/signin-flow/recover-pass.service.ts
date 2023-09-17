import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { configs } from '@configs/configs';

@Injectable()
export class RecoverPassService {
  private readonly http = inject(HttpClient);

  recoverPass(email: string) {
    this.http
      .post(configs.URL + '/user/reset-password', email)
      .subscribe((res) => console.log(res));
  }
}
