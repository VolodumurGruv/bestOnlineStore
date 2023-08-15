import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home-page/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './shared/header/components/search/search.component';
import { IconsComponent } from './shared/header/components/icons/icons.component';
import { CarouselComponent } from './home-page/components/carousel/carousel.component';
import { CardComponent } from './home-page/components/card/card.component';
import { AdvicesComponent } from './home-page/components/advices/advices.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    IconsComponent,
    CarouselComponent,
    CardComponent,
    AdvicesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
