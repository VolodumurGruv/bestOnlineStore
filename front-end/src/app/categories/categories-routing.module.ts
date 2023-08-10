import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ElectroToolsComponent } from "./electro-tools/electro-tools.component";
import { GardeningComponent } from "./gardening/gardening.component";
import { OthersComponent } from "./others/others.component";
import { PaintsComponent } from "./paints/paints.component";

const routes: Routes = [
  
    {path: 'electro', component: ElectroToolsComponent},
    {path: 'gardening', component: GardeningComponent},
    {path: 'paints', component: PaintsComponent},
    {path: 'others', component: OthersComponent}
]

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule{}
