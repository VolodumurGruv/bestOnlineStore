import {
  AfterViewChecked,
  Component,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

import { UserService } from 'app/components/user/services/user.service';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneValidator,
} from '@shared/utils/validators';
import { setupInitialValue } from '@shared/utils/initial-from-local';

import { ErrorValidationComponent } from '@shared/components/error-validation/error-validation.component';
import { OrderService } from '@shared/services/order.service';
import { Subscription, tap } from 'rxjs';
import { UserInfo } from '@interfaces/user.interface';
import { InfoFormItemComponent } from './info-form-item/info-form-item.component';
import { DeliveryFormItemComponent } from './delivery-form-item/delivery-form-item.component';
import { getNovaPoshtaDepartment } from '@shared/utils/nova-poshta';

@Component({
  selector: 'app-info-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorValidationComponent,
    InfoFormItemComponent,
    DeliveryFormItemComponent,
  ],
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.scss'],
})
export class InfoFormComponent implements OnInit, OnDestroy, AfterViewChecked {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly userService = inject(UserService);
  private readonly orderService = inject(OrderService);
  private unSub = new Subscription();

  public path!: string;

  @Input() isCart = false;
  private user!: UserInfo;
  isDepartment = false;
  departments: any;

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
    paymentMethod: ['cash'],
  });

  ngOnInit() {
    this.getUserInfo();

    this.route.url.subscribe((urlSegment: UrlSegment[]) => {
      if (urlSegment[0]) {
        this.path = urlSegment[0].path;
        console.log(this.path);
      }
    });
  }

  ngAfterViewChecked(): void {
    if (this.infoForm.get('deliveryMethod')?.value === 'Нова пошта') {
      this.infoForm.get('department')?.addValidators(Validators.required);
      this.infoForm.get('department')?.updateValueAndValidity();
    }

    if (this.infoForm.get('deliveryMethod')?.value !== 'Нова пошта') {
      this.infoForm.get('department')?.removeValidators(Validators.required);
      this.infoForm.get('department')?.updateValueAndValidity();
    }
  }

  updateUser() {
    this.unSub.add(
      this.userService.updateUser(this.infoForm.value).subscribe((res: any) => {
        setupInitialValue(this.infoForm, this.user);

        this.infoForm
          .get('deliveryMethod')
          ?.setValue(res.payload.user.shippingAddress.deliveryMethod);
        this.infoForm
          .get('address')
          ?.setValue(res.payload.user.shippingAddress.address);
      })
    );
  }

  makeOrder() {
    console.log(this.infoForm.value);
    const { address, paymentMethod, deliveryMethod, ...res } =
      this.infoForm.value;
    if (address && paymentMethod && deliveryMethod) {
      this.unSub.add(
        this.userService
          .updateUser({
            shippingAddress: {
              name: 'null',
              address,
              paymentMethod,
              deliveryMethod,
            },
            ...res,
          })
          .subscribe()
      );
    }

    this.unSub.add(
      this.orderService
        .makeOrder(JSON.parse(localStorage.getItem('user')!)._id)
        .subscribe()
    );
  }

  getDepartments(event: { city: string; ref: string }) {
    const { city, ref } = event;
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

  onSubmit() {}

  cancel() {
    this.infoForm.reset();
    this.getUserInfo();
  }

  getUserInfo() {
    this.unSub.add(
      this.userService
        .getUserById(JSON.parse(localStorage.getItem('user')!)._id)
        .pipe(
          tap((res: any) => {
            this.user = res;
            setupInitialValue(this.infoForm, this.user);
            this.infoForm
              .get('deliveryMethod')
              ?.setValue(res.shippingAddress.deliveryMethod);
            this.infoForm.get('address')?.setValue(res.shippingAddress.address);
          })
        )
        .subscribe()
    );
  }

  redirectToContact() {
    this.router.navigate(['/about/contact']);
  }

  ngOnDestroy(): void {
    this.unSub.unsubscribe();
  }
}
