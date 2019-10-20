import { AnimalsViewModule } from './components/animal/animals-view/animals-view.module';
import { AnimalCardModule } from './components/animal/animal-card/animal-card.module';
import { HomeModule } from './components/home/home.module';
import { CarouselInitialModule } from './components/carousel-initial/carousel-initial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopMenuModule } from './components/top-menu/top-menu.module';
import { FooterModule } from './components/footer/footer.module';
import { AboutUsModule } from './components/about-us/about-us.module';
import { HowToAdoptModule } from './components/how-to-adopt/how-to-adopt.module';
import { AnimalDetailModule } from './components/animal/animal-detail/animal-detail.module';
import { LoginModule } from './components/login/login.module';
import { AppService } from './shared/app/app.service';
import { HomeAdminModule } from './components/home-admin/home-admin.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AdminMenuModule } from './components/admin-menu/admin-menu.module';
import { AdminPageGuard } from './guard/admin-page.guard';
import { NormalPageGuard } from './guard/normal-page.guard';
import { LoginPageGuard } from './guard/login-page.guard';
import { AnimalListModule } from './components/animal/animal-list/animal-list.module';
import { InstitutionListModule } from './components/institution/institution-list/institution-list.module';
import { UserListModule } from './components/user/user-list/user-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TopMenuModule,
    HomeModule,
    CarouselInitialModule,
    AnimalCardModule,
    AnimalsViewModule,
    FooterModule,
    AboutUsModule,
    HowToAdoptModule,
    AnimalDetailModule,
    LoginModule,
    HomeAdminModule,
    AdminMenuModule,
    AnimalListModule,
    UserListModule,
    InstitutionListModule
  ],
  providers: [
    AppService,
    NormalPageGuard,
    AdminPageGuard,
    LoginPageGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
