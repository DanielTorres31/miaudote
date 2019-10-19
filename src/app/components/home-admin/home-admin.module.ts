import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin.component';
import { AdminMenuModule } from '../admin-menu/admin-menu.module';



@NgModule({
  declarations: [HomeAdminComponent],
  imports: [
    CommonModule,
    AdminMenuModule
  ],
  exports: [HomeAdminComponent]
})
export class HomeAdminModule { }
