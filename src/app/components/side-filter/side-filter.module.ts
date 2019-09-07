import { CheckboxButtonModule } from './../../html-components/checkbox-button/checkbox-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideFilterComponent } from './side-filter.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RadioButtonModule } from 'src/app/html-components/radio-button/radio-button.module';


@NgModule({
  declarations: [SideFilterComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    RadioButtonModule,
    CheckboxButtonModule,
  ],
  exports: [SideFilterComponent]
})
export class SideFilterModule { }
