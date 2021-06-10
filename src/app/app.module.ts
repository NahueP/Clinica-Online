import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ErrorComponent } from './pages/error/error.component';




@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ErrorComponent,
    
 

    
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
