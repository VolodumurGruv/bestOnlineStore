import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { deliveryData } from '@configs/delivery-data';
import { InputCheckBoxComponent } from '@shared/components/inputs/input-check-box/input-check-box.component';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { DepartmentDirective } from '../department.directive';
import { DeliveryService } from '@shared/services/interaction/department.service';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    CommonModule,
    InputCheckBoxComponent,
    TransformPricePipe,
    DepartmentDirective,
  ],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  private readonly deliveryService = inject(DeliveryService);
  public readonly deliveryData = deliveryData;
  public department: string = '';

  ngOnInit(): void {
    this.checkValidation();
  }
  onCheckBox(event: boolean, id: number) {
    this.department = this.deliveryData[id].department;

    this.deliveryData[id].isClosed = !event;
    this.deliveryData.forEach((item, i) => {
      if (id !== i) {
        this.deliveryData[i].isChecked = event;
      }
    });

    this.checkValidation();
  }

  private checkValidation() {
    const state = [];
    for (const item of Object.values(this.deliveryData)) {
      state.push(!item.isClosed);
    }

    this.deliveryService.isValid(state.some((i) => i));
  }
}
