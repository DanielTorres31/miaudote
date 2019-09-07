import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxButtonComponent } from './checkbox-button.component';



@NgModule({
  declarations: [CheckboxButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [CheckboxButtonComponent]
})
export class CheckboxButtonModule { }
