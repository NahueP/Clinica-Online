import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidad } from 'src/app/clases/especialidad';
import { Especialista } from 'src/app/clases/especialista';
import { UsuarioFireService } from '../../../services/usuario-fire.service';


@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss']
})
export class SolicitarTurnoComponent implements OnInit {

  especialidades$ : Observable<Especialidad[]>;
  especialistas$ : Observable<Especialista[]>;
  listaFiltrada = [];
  mostrarTodas : boolean = true;

  //card
  especialistaInfo : Especialista = new Especialista();
  seleccionado : boolean = false;

  constructor(private usuarioSvc : UsuarioFireService) 
  {
    this.especialidades$ = this.usuarioSvc.obtenerTodos('especialidades').valueChanges();
    this.especialistas$ = this.usuarioSvc.obtenerTodos('especialistas').valueChanges();
  }

  sinFiltrar()
  {
    this.mostrarTodas = true;
  }


  filtrarEspecialidad(especialidad: string)
  {
    this.mostrarTodas = false;
    this.listaFiltrada.splice(0,this.listaFiltrada.length);

      this.especialistas$.subscribe(esp=>{
       esp.forEach(especialista=>{
         if(especialista.especialidad.includes(especialidad))
         {
            this.listaFiltrada.push(especialista);
         }
       })
     })
   

  }

  selectEspecialista(especialista : Especialista)
  {
    this.seleccionado = true;

    this.especialistaInfo.nombre = especialista.nombre;
    this.especialistaInfo.apellido = especialista.apellido;
    this.especialistaInfo.especialidad = especialista.especialidad;
    this.especialistaInfo.edad = especialista.edad;
    this.especialistaInfo.email = especialista.email;
    this.especialistaInfo.fotoPerfil = especialista.fotoPerfil;
    
    

  }

  ngOnInit(): void {
    
  }


  

}
