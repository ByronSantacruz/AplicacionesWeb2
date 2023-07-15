import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComputadoraComponent } from './computadoras/computadoras.component';
import { PrestamistasComponent } from './prestamistas/prestamistas.component';
import { PrestamosComponent } from './prestamos/prestamos.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputadoraComponent,
    PrestamistasComponent,
    PrestamosComponent
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
