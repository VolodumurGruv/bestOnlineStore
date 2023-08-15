import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MockData } from 'src/app/interfaces/mock-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [],
})
export class CardComponent {
  @Input() mockData!: MockData;


  constructor(private router: Router) {}

  redirect(): void {
    this.router.navigate(['/catalog']);
  }
}
