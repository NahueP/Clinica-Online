import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AltasComponent } from './altas/altas.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HomeModule } from '../home/home.module';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListaTurnosComponent } from './lista-turnos/lista-turnos.component';
import { FiltrarSharedModule } from 'src/app/modules/filtrar-shared/filtrar-shared.module';
import { SacarTurnoComponent } from './sacar-turno/sacar-turno.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EstadoSharedModule } from 'src/app/modules/estado-shared/estado-shared.module';


@NgModule({
  declarations: [
    AltasComponent,
    EspecialistasComponent,
    ListaUsuariosComponent,
    PerfilComponent,
    ListaTurnosComponent,
    SacarTurnoComponent,
    UsuariosComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HomeModule,
    FiltrarSharedModule,
    EstadoSharedModule
  ]
})
export class AdminModule { }
