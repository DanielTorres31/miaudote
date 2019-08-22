import { AnimalsViewModule } from './../animals-view/animals-view.module';
import { AnimalCardModule } from './../animal-card/animal-card.module';
import { SideFilterModule } from './../side-filter/side-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SideFilterModule,
    AnimalsViewModule,
  ]
})
export class HomeModule { }
