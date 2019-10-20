import { TableModule } from 'src/app/html-components/table/table.module';
import { InstitutionService } from './../shared/institution.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionListComponent } from './institution-list.component';



@NgModule({
  declarations: [InstitutionListComponent],
  imports: [
    CommonModule,
    TableModule,
  ],
  exports: [InstitutionListComponent],
  providers: [InstitutionService]
})
export class InstitutionListModule { }
