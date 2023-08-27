import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message, Type } from '@interfaces/message.interface';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public alert$: Subject<Message> = new Subject<Message>();

  success(text: string) {
    this.alert$.next({ text, type: 'success' });
  }

  danger(text: string, errorText: string = '') {
    this.alert$.next({ text, errorText, type: 'danger' });
  }
  /*
  public msg: Message[] = [];
  constructor() {}

  addMessage(text: string, type: Type): void {
    this.msg.push({ text, type });
  }

  clear() {
    this.msg = [];
  }
  */
}
