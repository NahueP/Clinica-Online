import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { HomeAdminComponent } from '../home/home-admin/home-admin.component';
import { AltasComponent } from './altas/altas.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path: 'altas', component: AltasComponent, canActivate: [AdminGuard]},
  {path: 'especialistas', component: EspecialistasComponent, canActivate: [AdminGuard]},
  {path: 'lista-usuarios', component: ListaUsuariosComponent, canActivate: [AdminGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [AdminGuard]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
