import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeModule } from '../home/home.module';
import { HorariosComponent } from './horarios/horarios.component';


@NgModule({
  declarations: [
    PerfilComponent,
    HorariosComponent
  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    HomeModule
  ]
})
export class EspecialistaModule { }
