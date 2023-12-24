import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCheckBoxComponent } from '@shared/components/inputs/input-check-box/input-check-box.component';

@Component({
  selector: 'app-ukr-poshta',
  standalone: true,
  imports: [CommonModule, InputCheckBoxComponent],
  templateUrl: './ukr-poshta.component.html',
  styleUrls: ['./ukr-poshta.component.scss'],
})
export class UkrPoshtaComponent {}
