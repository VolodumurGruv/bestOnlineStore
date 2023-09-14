import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import {
  getAddresses,
  getNovaPoshtaDepartment,
  getNovaPoshtaStreet,
} from '../../utils/nova-poshta';
import { ContactUsComponent } from '@shared/components/icons/contact-us/contact-us.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [ReactiveFormsModule, ContactUsComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  public phoneHolder: any = '+380';
  public addresses: any;
  public departments: any;

  public infoForm = this.fb.group({
    firstName: [null],
    lastName: [null],
    email: [null],
    address: [null],
    phone: [null],
    password: [null],
  });

  ngOnInit(): void {
    getAddresses('Яготин')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.addresses = res.data;
      })
      .catch((e) => {
        console.error(e);
      });

    getNovaPoshtaDepartment('Баришівка')
      .then((res: any) => res.json())
      .then((res: any) => console.log(res))
      .catch((e: any) => {
        console.error(e);
      });

    getNovaPoshtaStreet('Баришівка')
      .then((res: any) => res.json())
      .then((res: any) => console.log(res));
  }

  getAddress(event: string): string {
    console.log(this.addresses);

    return '';
  }
}
