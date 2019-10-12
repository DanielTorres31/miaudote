import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail.component';
import { AnimalService } from 'src/app/shared/animal/animal.service';



@NgModule({
  declarations: [AnimalDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [AnimalDetailComponent],
  providers: [AnimalService]
})
export class AnimalDetailModule { }
