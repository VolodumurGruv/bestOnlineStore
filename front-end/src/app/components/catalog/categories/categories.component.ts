import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { mainCategories } from '@interfaces/catalog.data';
import { Category } from '@interfaces/catalog.interface';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {

}
