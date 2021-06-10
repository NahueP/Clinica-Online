import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisTurnosComponent } from './mis-turnos/mis-turnos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SolicitarTurnoComponent } from './solicitar-turno/solicitar-turno.component';

const routes: Routes = [
  {path:'perfil',component: PerfilComponent},
  {path: 'solicitar-turno', component: SolicitarTurnoComponent},
  {path: 'mis-turnos', component: MisTurnosComponent},
  {path: '', redirectTo:'perfil', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
