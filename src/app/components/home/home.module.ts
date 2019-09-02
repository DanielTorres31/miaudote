import { AnimalsViewModule } from './../animals-view/animals-view.module';
import { SideFilterModule } from './../side-filter/side-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselInitialModule } from '../carousel-initial/carousel-initial.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SideFilterModule,
    AnimalsViewModule,
    CarouselInitialModule
  ]
})
export class HomeModule { }
