import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElectoToolsComponent } from './categories/electo-tools/electo-tools.component';
import { GardeningComponent } from './categories/gardening/gardening.component';
import { OthersComponent } from './categories/others/others.component';
import { SortComponent } from './shared/sort/sort.component';
import { SearchComponent } from './shared/search/search.component';
import { SharedMaterialModule } from './shared/shared-material.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartComponent,
    ElectoToolsComponent,
    GardeningComponent,
    OthersComponent,
    SortComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
