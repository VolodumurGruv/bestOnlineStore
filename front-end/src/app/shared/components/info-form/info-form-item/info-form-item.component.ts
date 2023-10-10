import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { isValid } from '@shared/utils/is-valid';
import { ErrorValidationComponent } from '@shared/components/error-validation/error-validation.component';
import { Address } from '@interfaces/address';
import { getAddresses } from '@shared/utils/nova-poshta';

@Component({
  selector: 'app-info-form-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ErrorValidationComponent],
  templateUrl: './info-form-item.component.html',
  styleUrls: ['./info-form-item.component.scss'],
})
export class InfoFormItemComponent {
  @Input() infoForm!: FormGroup;
  @Output() departments = new EventEmitter<{ city: string; ref: string }>();

  public readonly isValid = isValid;
  public isChosen: boolean = false;
  public isDepartment: boolean = false;
  addresses: Address[] = [];

  public readonly phoneHolder = '+380';
  private clearTimeOut: any;

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

    this.getDepartments({ city: Description, ref: Ref });
    this.isDepartment = false;
    this.isChosen = false;
  }

  getDepartments(event: { city: string; ref: string }) {
    this.departments.emit(event);
  }

  onblur() {
    this.clearTimeOut = setTimeout(() => {
      clearTimeout(this.clearTimeOut);
      this.isChosen = false;
      this.isDepartment = false;
    }, 100);
  }
}
