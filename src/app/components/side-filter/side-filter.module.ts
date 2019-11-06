import { CheckboxButtonModule } from './../../html-components/checkbox-button/checkbox-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideFilterComponent } from './side-filter.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RadioButtonModule } from 'src/app/html-components/radio-button/radio-button.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [SideFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    RadioButtonModule,
    CheckboxButtonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot()
  ],
  exports: [SideFilterComponent]
})
export class SideFilterModule { }
