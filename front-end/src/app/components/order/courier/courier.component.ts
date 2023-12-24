import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputCheckBoxComponent } from '@shared/components/inputs/input-check-box/input-check-box.component';
import { TransformPricePipe } from '@shared/pipes/transform-price.pipe';

@Component({
  selector: 'app-courier',
  standalone: true,
  imports: [CommonModule, InputCheckBoxComponent, TransformPricePipe],
  templateUrl: './courier.component.html',
  styleUrls: ['./courier.component.scss'],
})
export class CourierComponent {}
