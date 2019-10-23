import { InstitutionService } from './../shared/institution.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionFormComponent } from './institution-form.component';



@NgModule({
  declarations: [InstitutionFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [InstitutionFormComponent],
  providers: [InstitutionService]
})
export class InstitutionFormModule { }
