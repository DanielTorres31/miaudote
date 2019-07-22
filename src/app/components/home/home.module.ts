import { SideFilterModule } from './../side-filter/side-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SideFilterModule,
  ]
})
export class HomeModule { }
