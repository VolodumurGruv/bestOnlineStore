import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
  {path: '', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'categories', component: CategoriesComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
