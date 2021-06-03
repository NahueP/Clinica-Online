import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';



const routes: Routes = [
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'ingresar', loadChildren: () => import('./pages/ingresar/ingresar.module').then(m => m.IngresarModule) },
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),canActivate: [AuthGuard] },
  {path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),canActivate: [AuthGuard] },
  {path: 'paciente', loadChildren: () => import('./pages/paciente/paciente.module').then(m => m.PacienteModule) },
  {path: 'especialista', loadChildren: () => import('./pages/especialista/especialista.module').then(m => m.EspecialistaModule) },
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
  { path: '**', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
