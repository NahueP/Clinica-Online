import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatSelectModule } from '@angular/material/select';


import { HomeRoutingModule } from './home-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomePacienteComponent } from './home-paciente/home-paciente.component';
import { HomeEspecialistaComponent } from './home-especialista/home-especialista.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { FiltrarSharedModule } from 'src/app/modules/filtrar-shared/filtrar-shared.module';
import { EstadoSharedModule } from 'src/app/modules/estado-shared/estado-shared.module';



@NgModule({
  declarations: [
    HomeAdminComponent,
    HomePacienteComponent,
    HomeEspecialistaComponent,
    NavbarComponent,
    
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    FiltrarSharedModule,
    EstadoSharedModule
    
    
  ],
  exports: [
    HomeAdminComponent,
    NavbarComponent,
      ]
})
export class HomeModule { }
