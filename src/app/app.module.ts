import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormationComponent } from './formation/formation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { VoirFormationComponent } from './voir-formation/voir-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogDataExampleDialogComponent } from './dialog-data-example-dialog/dialog-data-example-dialog.component';


import {  MatTableModule } from '@angular/material/table';
import { ExportFormationComponent } from './export-formation/export-formation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormationComponent,
    AddFormationComponent,
    HomeComponent,
    Error404Component,
    VoirFormationComponent,
    EditFormationComponent,
    DialogDataExampleDialogComponent,
    ExportFormationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
