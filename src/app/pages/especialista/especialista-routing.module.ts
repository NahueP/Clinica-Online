import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosComponent } from './horarios/horarios.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path:'perfil',component: PerfilComponent},
  {path:'horarios',component: HorariosComponent},
  {path:'pacientes',component: PacientesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistaRoutingModule { }
