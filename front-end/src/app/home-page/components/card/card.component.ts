import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockData } from 'src/app/interfaces/mock-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() mockData!: MockData;

  constructor(private router: Router) {}

  redirect(): void {
    this.router.navigate(['/catalog']);
  }
}
