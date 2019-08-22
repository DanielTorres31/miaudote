import { AnimalService } from './../../shared/animal/animal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCardComponent } from './animal-card.component';

@NgModule({
  declarations: [AnimalCardComponent],
  imports: [
    CommonModule
  ],
  providers: [AnimalService],
  exports: [AnimalCardComponent]
})
export class AnimalCardModule { }
