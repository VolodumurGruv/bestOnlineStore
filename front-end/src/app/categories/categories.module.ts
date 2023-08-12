import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectroToolsComponent } from './electro-tools/electro-tools.component';
import { GardeningComponent } from './gardening/gardening.component';
import { OthersComponent } from './others/others.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { PaintsComponent } from './paints/paints.component';



@NgModule({
  declarations: [
    ElectroToolsComponent,
    GardeningComponent,
    OthersComponent,
    PaintsComponent,
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
  ]
})
export class CategoriesModule { }
