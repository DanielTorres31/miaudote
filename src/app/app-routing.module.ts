import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HowToAdoptComponent } from './components/how-to-adopt/how-to-adopt.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quemsomos', component: AboutUsComponent },
  { path: 'comoadotar', component: HowToAdoptComponent },
  { path: 'detalhes/:id', component: AnimalDetailComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
