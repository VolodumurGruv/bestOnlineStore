import { Component } from '@angular/core';
import { MockData } from 'src/app/interfaces/mock-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  public readonly mockDataTop: MockData = {
    title: 'Популярне',
    data: [
      { title: 'Касовий столик', price: 6500, img: '', discount: 0 },
      { title: 'Касовий столик', price: 5500, img: '', discount: 6500 },
      { title: 'Касовий столик', price: 5000, img: '', discount: 6500 },
    ],
  };

  public readonly mockDataNew: MockData = {
    title: 'Новинки',
    data: [
      { title: 'Касовий столик', price: 6500, img: '', discount: 0 },
      { title: 'Касовий столик', price: 5500, img: '', discount: 0 },
      { title: 'Касовий столик', price: 5000, img: '', discount: 0 },
    ],
  };

  public readonly mockDataActions: MockData = {
    title: 'Акції',
    data: [
      { title: 'Касовий столик', price: 6500, img: '', discount: 7000 },
      { title: 'Касовий столик', price: 5500, img: '', discount: 6500 },
      { title: 'Касовий столик', price: 5000, img: '', discount: 6500 },
    ],
  };
}
