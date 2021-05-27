import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresarRoutingModule } from './ingresar-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatSelectModule } from '@angular/material/select';

 


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    IngresarRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
    
  ]
})
export class IngresarModule { }
