import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactUsComponent } from '@shared/components/icons/contact-us/contact-us.component';
import { UserService } from '../../services/user.service';
import { Address } from '@interfaces/address';
import { isValid } from '../../utils/is-valid';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneValidator,
} from '../../utils/validators';
import { setupInitialValue } from '../../utils/initial-from-local';
import { getAddresses, getNovaPoshtaDepartment } from '../../utils/nova-poshta';
import { ErrorValidationComponent } from '../error-validation/error-validation.component';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    NgClass,
    NgFor,
    NgIf,
    ContactUsComponent,
    ErrorValidationComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);
  public phoneHolder: any = '+380';
  public addresses: Address[] = [];
  public departments: any;
  public isChosen: boolean = false;
  public isDepartment: boolean = false;
  public isValid = isValid;
  private clearTimeOut: any;

  public infoForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        nameValidator(),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        nameValidator(),
      ],
    ],
    email: ['', [Validators.required, Validators.email, emailValidator()]],
    address: ['', [Validators.required]],
    phone: [
      '',
      [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
        phoneValidator(),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        passwordValidator(),
      ],
    ],
    department: [''],
    deliveryMethod: ['', [Validators.required]],
  });

  ngOnInit() {
    setupInitialValue(this.infoForm);
    this.userService.regAnonymous();
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
    const {
      Description,
      AreaDescription,
      SettlementTypeDescription,
      RegionsDescription,
      Ref,
    } = address;
    this.infoForm
      .get('address')
      ?.setValue(
        `${SettlementTypeDescription} ${Description} ${RegionsDescription} ${AreaDescription}`
      );

    this.getDepartments(Description, Ref);
    this.isDepartment = false;
    this.isChosen = false;
  }

  onSubmit() {
    this.userService.updateUser(this.infoForm.value);
  }

  cancel() {
    setupInitialValue(this.infoForm, this.infoForm.controls);
  }

  getDepartments(city: string, ref: string = '') {
    if (city) {
      getNovaPoshtaDepartment(city, ref)
        .then((res: any) => res.json())
        .then((res: any) => {
          this.isDepartment = true;
          return (this.departments = res.data
            .filter((data: any) => {
              return data.CategoryOfWarehouse !== 'Postomat';
            })
            .map((data: any) => {
              return {
                city: data.CityDescription,
                description: data.Description,
              };
            }));
        })
        .catch((e: any) => {
          console.error(e);
        });
    }
  }

  chosenDepartment(department: { city: string; description: string }) {
    if (department) {
      this.infoForm
        .get('department')
        ?.setValue(`${department.city} ${department.description}`);
      this.isDepartment = false;
    }
  }

  redirectToContact() {
    this.router.navigate(['/about/contact']);
  }

  onblur() {
    this.clearTimeOut = setTimeout(() => {
      clearTimeout(this.clearTimeOut);
      this.isChosen = false;
      this.isDepartment = false;
    }, 100);
  }

  ngOnDestroy(): void {
    clearTimeout(this.clearTimeOut);
  }
}
