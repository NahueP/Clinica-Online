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


@NgModule({
  declarations: [
    AltasComponent,
    EspecialistasComponent,
    ListaUsuariosComponent,
    PerfilComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HomeModule
  ]
})
export class AdminModule { }
