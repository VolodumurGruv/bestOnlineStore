import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/components/user/services/user.service';
import { Address } from '@interfaces/address';
import { isValid } from 'app/components/user/utils/is-valid';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneValidator,
} from 'app/components/user/utils/validators';
import { setupInitialValue } from 'app/components/user/utils/initial-from-local';
import {
  getAddresses,
  getNovaPoshtaDepartment,
} from 'app/components/user/utils/nova-poshta';
import { ErrorValidationComponent } from 'app/components/user/components/error-validation/error-validation.component';
import { Orders, UserInfo } from '@interfaces/user.interface';

@Component({
  selector: 'app-info-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorValidationComponent],
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss'],
})
export class InfoFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly userService = inject(UserService);
  public phoneHolder: any = '+380';
  public addresses: Address[] = [];
  public departments: any;
  public isChosen: boolean = false;
  public isDepartment: boolean = false;
  public isValid = isValid;
  private clearTimeOut: any;

  @Output() order = new EventEmitter<any>();
  @Input() orders!: Orders[];

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
    // this.userService.updateUser(this.infoForm.value);
    console.log(this.orders);
    this.order.emit(this.infoForm.value);
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
