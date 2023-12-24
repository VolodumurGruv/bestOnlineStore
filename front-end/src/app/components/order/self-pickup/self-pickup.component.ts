import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCheckBoxComponent } from '@shared/components/inputs/input-check-box/input-check-box.component';

@Component({
  selector: 'app-self-pickup',
  standalone: true,
  imports: [CommonModule, InputCheckBoxComponent],
  templateUrl: './self-pickup.component.html',
  styleUrls: ['./self-pickup.component.scss'],
})
export class SelfPickupComponent {}
