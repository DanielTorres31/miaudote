import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalDetailComponent } from './animal-detail.component';
import { AnimalService } from 'src/app/components/animal/shared/animal.service';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';



@NgModule({
  declarations: [AnimalDetailComponent],
  imports: [
    CommonModule,
    CardModule,
  ],
  exports: [AnimalDetailComponent],
  providers: [AnimalService]
})
export class AnimalDetailModule { }
