import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AddPersonajeComponent } from './personajes/add-personaje/add-personaje.component';
import { PersonajeCardComponent } from './personajes/personaje-card/personaje-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PersonajesDetailComponent } from './personajes/personaje-detail/personaje-detail.component';
import { PersonajesListComponent } from './personajes/personaje-list/personaje-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AddPersonajeComponent,
    PersonajeCardComponent,
    PersonajesDetailComponent,
    PersonajesListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
