import { Component, OnInit } from '@angular/core';
import { Especialista } from 'src/app/clases/especialista';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';
import { Paciente } from 'src/app/clases/paciente';
import { Observable } from 'rxjs';
import { Administrador } from 'src/app/clases/administrador';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

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
