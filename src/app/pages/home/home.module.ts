import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatSelectModule } from '@angular/material/select';


import { HomeRoutingModule } from './home-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AdminRegisterComponent } from './home-admin/admin-register/admin-register.component';
import { AdminEspecialistasComponent } from './home-admin/admin-especialistas/admin-especialistas.component';
import { AdminInfoComponent } from './home-admin/admin-info/admin-info.component';

@NgModule({
  declarations: [
    HomeAdminComponent,
    NavbarComponent,
    AdminRegisterComponent,
    AdminEspecialistasComponent,
    AdminInfoComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
    
  ]
})
export class HomeModule { }
