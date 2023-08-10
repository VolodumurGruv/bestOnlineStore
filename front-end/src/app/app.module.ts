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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartComponent,
    ElectoToolsComponent,
    GardeningComponent,
    OthersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
