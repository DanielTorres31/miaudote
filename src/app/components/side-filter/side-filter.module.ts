import { CheckboxButtonModule } from './../../html-components/checkbox-button/checkbox-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideFilterComponent } from './side-filter.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { RadioButtonModule } from 'src/app/html-components/radio-button/radio-button.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SideFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    RadioButtonModule,
    CheckboxButtonModule,
  ],
  exports: [SideFilterComponent]
})
export class SideFilterModule { }
