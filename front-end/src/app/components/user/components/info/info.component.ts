import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  getAddresses,
  getNovaPoshtaDepartment,
  getNovaPoshtaStreet,
} from '../../utils/nova-poshta';
import { ContactUsComponent } from '@shared/components/icons/contact-us/contact-us.component';
import { InputDropdownDirective } from '@shared/derectives/input-dropdown.directive';

interface Address {
  Description: string;
  AreaDescription: string;
  SettlementTypeDescription: string;
}
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [ReactiveFormsModule, ContactUsComponent, InputDropdownDirective],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  public phoneHolder: any = '+380';
  public addresses!: Address[];
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
    // getAddresses('Яготин')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     this.addresses = res.data;
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
    getNovaPoshtaDepartment()
      .then((res: any) => res.json())
      .then((res: any) => console.log(res))
      .catch((e: any) => {
        console.error(e);
      });
    // getNovaPoshtaStreet('Баришівка')
    //   .then((res: any) => res.json())
    //   .then((res: any) => console.log(res));
  }

  getAddress(city: string): string | null {
    if (city) {
      getAddresses(city)
        .then((res) => res.json())
        .then((res) => (this.addresses = res.data));

      console.log(this.addresses);
      return null;
    }

    return '';
  }

  onSubmit() {}

  redirectToContact() {
    this.router.navigate(['/']);
  }
}
