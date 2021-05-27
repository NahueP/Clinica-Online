import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Especialista } from 'src/app/clases/especialista';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';
import { Paciente } from 'src/app/clases/paciente';
import { Observable } from 'rxjs';
import { Administrador } from 'src/app/clases/administrador';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.scss']
})
export class AdminInfoComponent implements OnInit {

  pacientes$: Observable<Paciente[]>;
  especialistas$: Observable<Especialista[]>;
  administradores$: Observable<Administrador[]>;
  tipo : string = 'pacientes';

  constructor(private usuariosSvc : UsuarioFireService)
  {
    this.pacientes$ = this.usuariosSvc.obtenerTodos('pacientes').valueChanges();
    this.especialistas$ = this.usuariosSvc.obtenerTodos('especialistas').valueChanges();
    this.administradores$ = this.usuariosSvc.obtenerTodos('administradores').valueChanges();
  }

  ngOnInit(): void {
    
  }

}
