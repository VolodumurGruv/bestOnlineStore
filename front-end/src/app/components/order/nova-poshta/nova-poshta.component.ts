import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCheckBoxComponent } from '@shared/components/inputs/input-check-box/input-check-box.component';
import { InputSelectComponent } from '@shared/components/inputs/input-select/input-select.component';
import { getCities, getNovaPoshtaDepartment } from '@shared/utils/nova-poshta';

@Component({
  selector: 'app-nova-poshta',
  standalone: true,
  imports: [CommonModule, InputCheckBoxComponent, InputSelectComponent],
  templateUrl: './nova-poshta.component.html',
  styleUrls: ['./nova-poshta.component.scss'],
})
export class NovaPoshtaComponent implements OnInit {
  items = {
    cities: ['Виберіть місто'],
    departments: ['Виберіть відділення або адресу'],
  };

  city = '';
  departmentName = '';

  ngOnInit(): void {}

  getCity(event: string) {
    this.items.cities = ['Виберіть місто'];
    this.city = event;
    getCities(this.city)
      .then((d) => d.json())
      .then((d) => {
        d.data.map((item: any) => this.items.cities.push(item.Description));
      });
  }

  getDepartments(event: string) {
    this.departmentName = event;
    this.items.departments = ['Виберіть відділення або адресу'];
    if (this.city) {
      getNovaPoshtaDepartment(this.city, this.departmentName)
        .then((d) => d.json())
        .then((d) =>
          d.data.forEach((item: any) => {
            this.items.departments.push(item.Description);
          })
        );
    }
  }
}
