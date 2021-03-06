import { InstitutionListComponent } from './components/institution/institution-list/institution-list.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HowToAdoptComponent } from './components/how-to-adopt/how-to-adopt.component';
import { AnimalDetailComponent } from './components/animal/animal-detail/animal-detail.component';
import { LoginComponent } from './components/login/login.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { NormalPageGuard } from './guard/normal-page.guard';
import { LoginPageGuard } from './guard/login-page.guard';
import { AdminPageGuard } from './guard/admin-page.guard';
import { AnimalListComponent } from './components/animal/animal-list/animal-list.component';
import { InstitutionFormComponent } from './components/institution/institution-form/institution-form.component';
import { AnimalFormComponent } from './components/animal/animal-form/animal-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [NormalPageGuard] },
  { path: 'quemsomos', component: AboutUsComponent, canActivate: [NormalPageGuard] },
  { path: 'comoadotar', component: HowToAdoptComponent, canActivate: [NormalPageGuard] },
  { path: 'detalhes/:id', component: AnimalDetailComponent, canActivate: [NormalPageGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginPageGuard] },

  { path: 'admin', component: HomeAdminComponent, canActivate: [AdminPageGuard] },

  { path: 'animal', component: AnimalListComponent, canActivate: [AdminPageGuard] },
  { path: 'animal/novo', component: AnimalFormComponent, canActivate: [AdminPageGuard] },
  { path: 'animal/:id', component: AnimalFormComponent, canActivate: [AdminPageGuard] },

  { path: 'instituicao', component: InstitutionListComponent, canActivate: [AdminPageGuard] },
  { path: 'instituicao/nova', component: InstitutionFormComponent, canActivate: [AdminPageGuard] },
  { path: 'instituicao/:id', component: InstitutionFormComponent, canActivate: [AdminPageGuard] },
  
  { path: 'usuario', component: UserListComponent, canActivate: [AdminPageGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
