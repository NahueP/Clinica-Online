import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';
import { AuthService } from '../../../services/auth.service';
import { take, map, tap } from 'rxjs/operators';
import { Paciente } from 'src/app/clases/paciente';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfil : Paciente = new Paciente();

  constructor(private usuarioSvc : UsuarioFireService, private authSvc : AuthService, private router : Router) { }

  ngOnInit(): void {

    this.authSvc.afAuth.authState.subscribe(user=>{

      if(user!=null)
      {
        this.usuarioSvc.obtenerTodos('pacientes').valueChanges().subscribe(listaPac=>{
          listaPac.forEach(pac => {
            
            if(pac.email == user.email)
            {
              this.perfil.nombre = pac.nombre;
              this.perfil.apellido = pac.apellido;
              this.perfil.dni = pac.dni;
              this.perfil.edad = pac.edad;
              this.perfil.email = pac.email;
              this.perfil.obraSocial = pac.obraSocial;
              this.perfil.fotoPerfilUno = pac.fotoPerfilUno;
              this.perfil.fotoPerfilDos = pac.fotoPerfilDos;
            }
           
   
          })
        })
          
      }
    })
   
      
    
  }

}
