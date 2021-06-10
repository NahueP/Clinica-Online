import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeModule } from '../home/home.module';
import { HorariosComponent } from './horarios/horarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacientesComponent } from './pacientes/pacientes.component';
import { FiltrarSharedModule } from 'src/app/modules/filtrar-shared/filtrar-shared.module';


@NgModule({
  declarations: [
    PerfilComponent,
    HorariosComponent,
    PacientesComponent,
    
  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    FiltrarSharedModule
  ]
})
export class EspecialistaModule { }
