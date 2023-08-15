import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styles: [],
})
export class TopComponent {
  public readonly mockCardData = [
    { title: 'Касовий столик', price: 6500, img: '', discount: 0 },
    { title: 'Касовий столик', price: 5500, img: '', discount: 6500 },
    { title: 'Касовий столик', price: 5000, img: '', discount: 6500 },
  ];

  constructor(private router: Router) {}

  redirect(): void {
    this.router.navigate(['/catalog']);
  }
}
