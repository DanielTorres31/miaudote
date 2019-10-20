import { TableModule } from 'src/app/html-components/table/table.module';
import { AnimalService } from 'src/app/components/animal/shared/animal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalListComponent } from './animal-list.component';



@NgModule({
  declarations: [AnimalListComponent],
  imports: [
    CommonModule,
    TableModule,
  ],
  exports: [AnimalListComponent],
  providers: [AnimalService]
})
export class AnimalListModule { }
