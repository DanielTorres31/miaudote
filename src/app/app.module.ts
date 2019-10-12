import { AnimalsViewModule } from './components/animals-view/animals-view.module';
import { AnimalCardModule } from './components/animal-card/animal-card.module';
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
import { AnimalDetailModule } from './components/animal-detail/animal-detail.module';
import { LoginModule } from './components/login/login.module';

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
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
