import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutionListComponent } from './institution-list.component';



@NgModule({
  declarations: [InstitutionListComponent],
  imports: [
    CommonModule
  ],
  exports: [InstitutionListComponent]
})
export class InstitutionListModule { }
