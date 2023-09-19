import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonPipe, NgFor, NgIf } from '@angular/common';

import {
  getAddresses,
  getNovaPoshtaDepartment,
  getNovaPoshtaStreet,
} from '../../utils/nova-poshta';
import { ContactUsComponent } from '@shared/components/icons/contact-us/contact-us.component';

interface Address {
  Description: string;
  AreaDescription: string;
  SettlementTypeDescription: string;
  RegionsDescription: string;
  SettlementRef?: string;
  Ref?: string;
  Area?: string;
}

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, JsonPipe, ContactUsComponent],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  public phoneHolder: any = '+380';
  public addresses: Address[] = [];
  public departments: any;
  public isChosen: boolean = false;

  public infoForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    address: [''],
    phone: [''],
    password: [''],
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
    // getNovaPoshtaStreet('Баришівка')
    //   .then((res: any) => res.json())
    //   .then((res: any) => console.log(res));
  }

  getAddress(city: string): void {
    if (city) {
      getAddresses(city)
        .then((res) => res.json())
        .then((res) => (this.addresses = res.data));

      this.isChosen = true;
    }
  }

  chosenAddress(address: any) {
    console.log(this.addresses);
    const {
      Description,
      AreaDescription,
      SettlementTypeDescription,
      RegionsDescription,
      Ref,
      Area,
    } = address;
    this.infoForm
      .get('address')
      ?.setValue(
        `${SettlementTypeDescription} ${Description} ${RegionsDescription} ${AreaDescription}`
      );

    getNovaPoshtaDepartment(Description, Ref, Area, RegionsDescription)
      .then((res: any) => res.json())
      .then((res: any) => {
        console.log(res);
        return (this.departments = res.data.map(
          (data: any) => data.Description
        ));
      })
      .catch((e: any) => {
        console.error(e);
      });

    this.isChosen = false;
  }

  onSubmit() {}

  redirectToContact() {
    this.router.navigate(['/']);
  }
}
