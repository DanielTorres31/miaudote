import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideFilterComponent } from './side-filter.component';


@NgModule({
  declarations: [SideFilterComponent],
  imports: [
    CommonModule,
  ],
  exports: [SideFilterComponent]
})
export class SideFilterModule { }
