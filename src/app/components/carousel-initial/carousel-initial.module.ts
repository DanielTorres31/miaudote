import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselInitialComponent } from './carousel-initial.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {GalleriaModule} from 'primeng/galleria';


@NgModule({
  declarations: [CarouselInitialComponent],
  imports: [
    CommonModule,
    CarouselModule,
    GalleriaModule
  ],
  exports: [CarouselInitialComponent]
})
export class CarouselInitialModule { }
