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
  items: { cities: string[]; departments: string[] } = {
    cities: [],
    departments: [],
  };

  placeholder = {
    city: 'Виберіть місто',
    department: 'Виберіть відділення або адресу',
  };

  city = '';
  departmentName = '';

  ngOnInit(): void {}

  getCity(event: string) {
    this.city = event;
    getCities(this.city)
      .then((d) => d.json())
      .then((d) => {
        this.items.cities = [];
        d.data.map((item: any) => this.items.cities.push(item.Description));
        if (this.items.cities.length >= 1) {
          this.getDepartments(this.city);
        }
      });
  }

  getDepartments(event: string) {
    this.departmentName = event;
    console.log(this.city);
    if (this.city) {
      getNovaPoshtaDepartment(this.city, this.departmentName)
        .then((d) => d.json())
        .then((d) => {
          this.items.departments = [];
          d.data.forEach((item: any) => {
            this.items.departments.push(item.Description);
          });
          if (this.departmentName) {
            //
          }
        });
    }

    console.log(this.items);
  }
}
