import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideFilterComponent } from './side-filter.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


@NgModule({
  declarations: [SideFilterComponent],
  imports: [
    CommonModule,
    ButtonsModule,
  ],
  exports: [SideFilterComponent]
})
export class SideFilterModule { }
