import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { AdminEspecialistasComponent } from './home-admin/admin-especialistas/admin-especialistas.component';
import { AdminInfoComponent } from './home-admin/admin-info/admin-info.component';
import { AdminRegisterComponent } from './home-admin/admin-register/admin-register.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';

const routes: Routes = [
  {path: 'admin', component: HomeAdminComponent},
  { path: 'admin-registro', component: AdminRegisterComponent},
  { path: 'admin-especialista', component: AdminEspecialistasComponent},
  { path: 'admin-info', component: AdminInfoComponent},
  {path: '', redirectTo:'admin', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }


