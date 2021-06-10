import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';
import { AuthService } from '../../../services/auth.service';
import { take, map, tap } from 'rxjs/operators';
import { Especialista } from '../../../clases/especialista';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfil : Especialista = new Especialista();
  listaHorarios = [];
  nombre : string;
  apellido : string;
  edad : number;

  constructor(private usuarioSvc : UsuarioFireService, private authSvc : AuthService, private router : Router, private turnoSvc : TurnosService) 
  { 
    
  }

  modificarDatos()
  {
    
    this.usuarioSvc.obtenerTodos('especialistas').snapshotChanges().pipe(take(1)).subscribe(listaEsp=>{
      listaEsp.forEach(response => {
        let especialista : any = response.payload.doc.data();
           let id = response.payload.doc.id;

        if(especialista.email == this.perfil.email)
        {
          especialista.nombre = this.nombre;
          especialista.apellido = this.apellido;
          especialista.edad = this.edad;

          this.usuarioSvc.actualizar('especialistas', especialista,id);
        }
      })
    })


  }

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

        // this.turnoSvc.obtenerTodosTurnos('horarios').snapshotChanges().pipe(take(1)).subscribe(lista=>{
        //   lista.forEach((response):any =>{
        //     let horario : any = response.payload.doc.data();
           
        //     if(horario.email == this.perfil.email)
        //     {
        //       this.listaHorarios.push(horario.especialidad);
              
        //       horario.horarios.forEach(hora=>{
                
        //         if(hora.dia == "Sabado")
        //         {
        //           if(hora.horas < 14)
        //           {
        //             this.listaHorarios.push(hora.dia);
        //             this.listaHorarios.push(hora.horas);
        //           }
        //         }
        //         else
        //         {
        //           this.listaHorarios.push(hora.dia);
        //           this.listaHorarios.push(hora.horas);
        //         }
                
             
        //       })
              
        //     }

        //   })
        // })
        //   console.log(this.listaHorarios);
      }
    })
   
    
      
    
  }


}
