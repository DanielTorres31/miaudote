import { MenuPrincipalComponent } from './menu-principal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIconModule } from '../main-icon/main-icon.module';

@NgModule({
  declarations: [
    MenuPrincipalComponent,
  ],
  imports: [
    CommonModule,
    MainIconModule,
  ],
  exports: [
    MenuPrincipalComponent,
  ]
})
export class MenuPrincipalModule { }
