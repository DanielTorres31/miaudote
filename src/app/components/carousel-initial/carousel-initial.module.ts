import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselInitialComponent } from './carousel-initial.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [CarouselInitialComponent],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  exports: [CarouselInitialComponent]
})
export class CarouselInitialModule { }
