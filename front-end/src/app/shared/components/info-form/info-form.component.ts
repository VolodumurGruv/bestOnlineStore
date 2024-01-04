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
import { Subscription, tap } from 'rxjs';

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
    firstName: [
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
  });

  ngOnInit() {
    this.getUserInfo();

    this.route.url.subscribe((urlSegment: UrlSegment[]) => {
      if (urlSegment[0]) {
        this.path = urlSegment[0].path;
      }
    });
  }

  ngAfterViewChecked(): void {
    if (this.infoForm.get('deliveryMethod')?.value === 'Нова пошта') {
      this.infoForm
        .get('novaPoshtaAddress')
        ?.addValidators(Validators.required);
      this.infoForm.get('novaPoshtaAddress')?.updateValueAndValidity();
    }

    if (this.infoForm.get('deliveryMethod')?.value !== 'Нова пошта') {
      this.infoForm
        .get('novaPoshtaAddress')
        ?.removeValidators(Validators.required);
      this.infoForm.get('novaPoshtaAddress')?.updateValueAndValidity();
    }
  }

  updateUser() {
    this.unSub.add(
      this.userService.updateUser(this.infoForm.value).subscribe((res: any) => {
        setupInitialValue(this.infoForm, res.payload.user);
      })
    );
  }

  makeOrder() {
    if (this.infoForm.value) {
      this.unSub.add(
        this.userService.updateUser(this.infoForm.value).subscribe(() => {
          this.router.navigate([{ outlets: { cart: null } }], {
            relativeTo: this.route.parent,
          });
        })
      );
      this.router.navigate(['/order']);
    }
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
            this.user = res.user;
            setupInitialValue(this.infoForm, this.user);
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
