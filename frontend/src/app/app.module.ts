import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms"; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarService } from './car.service';

import { CarDetailsComponent } from './cardetails/cardetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
