import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalFormComponent } from './animal-form.component';
import { ImageCropperModule } from 'ngx-image-cropper';



@NgModule({
  declarations: [AnimalFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ImageCropperModule,
  ]
})
export class AnimalFormModule { }
