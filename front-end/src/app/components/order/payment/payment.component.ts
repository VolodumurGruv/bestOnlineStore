import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortmoneComponent } from '@shared/components/icons/portmone/portmone.component';
import { svg } from '@interfaces/pictures-map';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, PortmoneComponent],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  svg = svg;
}
