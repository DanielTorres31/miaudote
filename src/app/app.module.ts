import { InterceptorHttp } from './utils/interceptor-http.service';
import { ApiResponseUtils } from './utils/api-response-utils';
import { AnimalFormModule } from './components/animal/animal-form/animal-form.module';
import { MessageService } from 'primeng/api';
import { AnimalsViewModule } from './components/animal/animals-view/animals-view.module';
import { AnimalCardModule } from './components/animal/animal-card/animal-card.module';
import { HomeModule } from './components/home/home.module';
import { CarouselInitialModule } from './components/carousel-initial/carousel-initial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { InstitutionFormModule } from './components/institution/institution-form/institution-form.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
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
    AnimalFormModule,
    UserListModule,
    InstitutionListModule,
    InstitutionFormModule,
  ],
  providers: [
    AppService,
    MessageService,
    ApiResponseUtils,
    NormalPageGuard,
    AdminPageGuard,
    LoginPageGuard,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorHttp, multi: true },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
