import { MenuPrincipalModule } from './components/menu-principal/menu-principal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainIconModule } from './components/main-icon/main-icon.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuPrincipalModule,
    MainIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
