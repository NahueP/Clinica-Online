import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';
import { AuthService } from '../../../services/auth.service';
import { take, map, tap } from 'rxjs/operators';
import { Especialista } from '../../../clases/especialista';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfil : Especialista = new Especialista();

  constructor(private usuarioSvc : UsuarioFireService, private authSvc : AuthService, private router : Router) { }

  ngOnInit(): void {

    this.authSvc.afAuth.authState.subscribe(user=>{

      if(user!=null)
      {
        this.usuarioSvc.obtenerTodos('especialistas').valueChanges().subscribe(listaEsp=>{
          listaEsp.forEach(esp => {
            
            if(esp.email == user.email)
            {
              this.perfil.nombre = esp.nombre;
              this.perfil.apellido = esp.apellido;
              this.perfil.dni = esp.dni;
              this.perfil.edad = esp.edad;
              this.perfil.email = esp.email;
              this.perfil.especialidad = esp.especialidad;
              this.perfil.fotoPerfil = esp.fotoPerfil;
           
            }
           
   
          })
        })
          
      }
    })
   
      
    
  }


}
