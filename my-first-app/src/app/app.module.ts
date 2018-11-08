import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 44f4d0148ee1f6ff3e9e8eb0648cf7f86870f485
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    HttpModule,
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    HttpModule
>>>>>>> 44f4d0148ee1f6ff3e9e8eb0648cf7f86870f485
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
