import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { deliveryData } from '@configs/delivery-data';
import { InputCheckBoxComponent } from '@shared/components/inputs/input-check-box/input-check-box.component';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';
import { DepartmentDirective } from '../department.directive';

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
export class DepartmentComponent {
  public readonly deliveryData = deliveryData;
  public department: string = '';

  onCheckBox(event: boolean, id: number) {
    this.department = this.deliveryData[id].department;

    this.deliveryData[id].isClosed = !event;
    this.deliveryData.forEach((item, i) => {
      if (id !== i) {
        this.deliveryData[i].isChecked = event;
      }
    });
  }
}
