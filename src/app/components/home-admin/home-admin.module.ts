import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin.component';
import { AdminMenuModule } from '../admin-menu/admin-menu.module';
import { TableModule } from 'src/app/html-components/table/table.module';

@NgModule({
  declarations: [HomeAdminComponent],
  imports: [
    CommonModule,
    AdminMenuModule,
    TableModule,
  ],
  exports: [HomeAdminComponent]
})
export class HomeAdminModule { }
