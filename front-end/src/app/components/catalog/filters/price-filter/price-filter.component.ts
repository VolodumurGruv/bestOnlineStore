import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-price-filter',
  standalone: true,
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss'],
  imports: [FormsModule],
})
export class PriceFilterComponent {
  public min: number = 100;
  public max: number = 1000000;
  public step: number = 100;
  public fromRange: number = 100;
  public toRange: number = 200;

  private controlFrom() {
    if (!(this.fromRange < this.toRange)) {
      this.fromRange -= 100;
    }
  }
}
