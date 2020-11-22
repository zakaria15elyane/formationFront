import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormationComponent } from './formation/formation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { VoirFormationComponent } from './voir-formation/voir-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormationComponent,
    AddFormationComponent,
    HomeComponent,
    Error404Component,
    VoirFormationComponent,
    EditFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
