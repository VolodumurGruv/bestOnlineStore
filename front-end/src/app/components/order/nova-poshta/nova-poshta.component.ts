import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCheckBoxComponent } from '@shared/components/inputs/input-check-box/input-check-box.component';
import { InputSelectComponent } from '@shared/components/inputs/input-select/input-select.component';

@Component({
  selector: 'app-nova-poshta',
  standalone: true,
  imports: [CommonModule, InputCheckBoxComponent, InputSelectComponent],
  templateUrl: './nova-poshta.component.html',
  styleUrls: ['./nova-poshta.component.scss'],
})
export class NovaPoshtaComponent {
  items = ['Місто', 'Відділення'];
}
