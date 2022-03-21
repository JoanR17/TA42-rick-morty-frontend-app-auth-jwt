import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AddPersonajeComponent } from './personajes/add-personaje/add-personaje.component';
import { PersonajesDetailComponent } from './personajes/personaje-detail/personaje-detail.component';
import { PersonajesListComponent } from './personajes/personaje-list/personaje-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'personajes',
    component: PersonajesListComponent
  },
  {
    path: 'personajes/add',
    component: AddPersonajeComponent
  },
  {
    path: 'personajes/:id',
    component: PersonajesDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
