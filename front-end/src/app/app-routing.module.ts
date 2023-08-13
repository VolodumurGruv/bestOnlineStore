import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';


const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: '/', pathMatch: 'full'},
  ]},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
