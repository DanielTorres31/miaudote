import { CarouselInitialModule } from './components/carousel-initial/carousel-initial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopMenuModule } from './components/top-menu/top-menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TopMenuModule,
    CarouselInitialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
