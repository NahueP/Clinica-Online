import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [
  {path: 'bienvenida', component: BienvenidaComponent},
  {path: 'ingresar', loadChildren: () => import('./pages/ingresar/ingresar.module').then(m => m.IngresarModule) },
  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),canActivate: [AuthGuard] },
  {path: 'error', component: ErrorComponent},
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
