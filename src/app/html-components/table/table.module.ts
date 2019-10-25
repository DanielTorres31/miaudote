import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [TableComponent]
})
export class TableModule { }
