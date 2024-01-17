import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-completed-order',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './completed-order.component.html',
  styleUrls: ['./completed-order.component.scss'],
})
export class CompletedOrderComponent {}
