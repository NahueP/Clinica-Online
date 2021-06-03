import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';
import { AuthService } from '../../../services/auth.service';
import { take, map, tap } from 'rxjs/operators';
import { Administrador } from 'src/app/clases/administrador';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {


  perfil : Administrador = new Administrador();

  constructor(private usuarioSvc : UsuarioFireService, private authSvc : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.authSvc.afAuth.authState.subscribe(user=>{

      if(user!=null)
      {
        this.usuarioSvc.obtenerTodos('administradores').valueChanges().subscribe(listaAdmin=>{
          listaAdmin.forEach(admin => {
            
            if(admin.email == user.email)
            {
              this.perfil.nombre = admin.nombre;
              this.perfil.apellido = admin.apellido;
              this.perfil.dni = admin.dni;
              this.perfil.edad = admin.edad;
              this.perfil.email = admin.email;
              this.perfil.fotoPerfil = admin.fotoPerfil;
             
            }
           
   
          })
        })
          
      }
    })
   
  }

  
}


