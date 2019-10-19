import { AnimalCardModule } from './../animal-card/animal-card.module';
import { AnimalService } from '../animal/shared/animal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsViewComponent } from './animals-view.component';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
  declarations: [AnimalsViewComponent],
  imports: [
    CommonModule,
    AnimalCardModule,
  ],
  providers: [AnimalService],
  exports: [AnimalsViewComponent]
})
export class AnimalsViewModule { }
