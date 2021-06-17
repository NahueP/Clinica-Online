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
import { OrdenarSharedModule } from 'src/app/modules/ordenar-shared/ordenar-shared.module';
import { ResaltarSharedModule } from 'src/app/modules/resaltar-shared/resaltar-shared.module';
import { CapitularSharedModule } from 'src/app/modules/capitular-shared/capitular-shared.module';
import { ImagenDirective } from 'src/app/directives/imagen.directive';


@NgModule({
  declarations: [
    PerfilComponent,
    SolicitarTurnoComponent,
    MisTurnosComponent,
    ImagenDirective
    
    
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    FiltrarSharedModule,
    EstadoSharedModule,
    OrdenarSharedModule,
    ResaltarSharedModule,
    CapitularSharedModule
    
    
  
  ],
  
})
export class PacienteModule { }
