import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { HomeModule } from '../home/home.module';
import { PerfilComponent } from './perfil/perfil.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltrarSharedModule } from 'src/app/modules/filtrar-shared/filtrar-shared.module';
import { EstadoSharedModule } from 'src/app/modules/estado-shared/estado-shared.module';


@NgModule({
  declarations: [
    PerfilComponent,
    SolicitarTurnoComponent,
    MisTurnosComponent,
    
    
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    FiltrarSharedModule,
    EstadoSharedModule
  
  ],
  
})
export class PacienteModule { }
