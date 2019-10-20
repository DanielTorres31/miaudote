import { AnimalsViewModule } from '../animal/animals-view/animals-view.module';
import { SideFilterModule } from './../side-filter/side-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselInitialModule } from '../carousel-initial/carousel-initial.module';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SideFilterModule,
    AnimalsViewModule,
    CarouselInitialModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})
export class HomeModule { }
