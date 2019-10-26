import { FormsModule } from '@angular/forms';
import { AnimalService } from './../shared/animal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalFormComponent } from './animal-form.component';



@NgModule({
  declarations: [AnimalFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AnimalFormModule { }
