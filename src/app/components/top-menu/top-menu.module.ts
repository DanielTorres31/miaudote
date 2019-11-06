import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';



@NgModule({
  declarations: [TopMenuComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  exports: [TopMenuComponent]
})
export class TopMenuModule { }
