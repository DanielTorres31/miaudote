import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [TopMenuComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule
  ],
  exports: [TopMenuComponent]
})
export class TopMenuModule { }
