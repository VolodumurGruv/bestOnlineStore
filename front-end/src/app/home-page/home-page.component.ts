import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AdvicesComponent } from './components/advices/advices.component';
import { CardComponent } from './components/card/card.component';
import { MockData } from '../interfaces/mock-data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CarouselComponent, AdvicesComponent, CardComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
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
