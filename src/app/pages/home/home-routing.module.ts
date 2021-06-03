import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeEspecialistaComponent } from './home-especialista/home-especialista.component';
import { HomePacienteComponent } from './home-paciente/home-paciente.component';

const routes: Routes = [
  {path: 'admin', component: HomeAdminComponent, canActivate: [AdminGuard]},
  {path: 'paciente', component: HomePacienteComponent},
  {path: 'especialista', component: HomeEspecialistaComponent},
  {path: '', redirectTo:'paciente', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }


