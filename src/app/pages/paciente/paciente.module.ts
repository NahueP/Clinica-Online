import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { HomeModule } from '../home/home.module';
import { PerfilComponent } from './perfil/perfil.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';


@NgModule({
  declarations: [
    PerfilComponent,
    SolicitarTurnoComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    HomeModule
  ]
})
export class PacienteModule { }
