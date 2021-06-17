import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';
import { AuthService } from '../../../services/auth.service';
import { take } from 'rxjs/operators';
import { Paciente } from 'src/app/clases/paciente';
import { TurnosService } from 'src/app/services/turnos.service';
import { Turno } from '../../../clases/turno';
import Swal from 'sweetalert2';
import { AlertService } from 'src/app/services/alert.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfil : Paciente = new Paciente();
  nombre : string;
  apellido : string;
  edad : number;
  usuarioLogeado : string;
  turnos$ : Observable<Turno[]>;
  searchValue : string;
  mostrarResenia : string;
  mostrarDiagnostico = [];
  reseniaEstado : string;

  urlImg : any;



  constructor(private turnosSvc : TurnosService,private http: HttpClient, private usuarioSvc : UsuarioFireService, private authSvc : AuthService, private router : Router)
  { 
    this.turnos$ = this.turnosSvc.obtenerTodosTurnos('turnos').valueChanges();
  }


  modificarDatos()
  {
    
    this.usuarioSvc.obtenerTodos('pacientes').snapshotChanges().pipe(take(1)).subscribe(listaPac=>{
      listaPac.forEach(response => {
        let paciente : any = response.payload.doc.data();
           let id = response.payload.doc.id;

        if(paciente.email == this.perfil.email)
        {
          paciente.nombre = this.nombre;
          paciente.apellido = this.apellido;
          paciente.edad = this.edad;

          this.usuarioSvc.actualizar('pacientes', paciente,id);
        }
      })
    })


  }




  verResenia(turno : Turno)
  {
    this.reseniaEstado = turno.estado;
    
    if(turno.estado == "Realizado")
    {
      this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
        lista.forEach(response=>{
          let turnos : any = response.payload.doc.data();

          if(turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente)
          {
             this.mostrarDiagnostico = turnos.diagnostico;
             this.mostrarResenia = turnos.resenia;
          }
        })
      })

    }
    else
    {
      if(turno.estado == "Rechazado" || turno.estado == "Cancelado" )
      {
        this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
          lista.forEach(response=>{
            let turnos : any = response.payload.doc.data();
  
            if(turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente)
            {
               this.mostrarResenia = turnos.resenia;
            }
          })
        })

      }
    }
  }

  imprimirHistoriaClinica()
  {
     const doc = new jsPDF();
     


     doc.addImage(this.urlImg, 'PNG', 79, 7, 50, 50);
     
     doc.text("Historia Clinica: " + this.perfil.nombre +" "+this.perfil.apellido,15,70);
    
     this.turnos$.pipe(take(1)).subscribe(lista=>{
       lista.forEach(turnos=>{

         if(turnos.estado=='Realizado' && turnos.emailPaciente == this.usuarioLogeado)
         {

          autoTable(doc,{
            columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } },
            margin: { top: 80 },
            head: [['Fecha', 'Especialidad', 'Especialista','Altura', 'Peso', 'Temperatura','Presion',turnos.diagnostico.dato1,turnos.diagnostico.dato2,turnos.diagnostico.dato3,],],
            body: [
              [turnos.turno.fecha, turnos.especialidad, turnos.nombreEspecialista,turnos.diagnostico.altura, turnos.diagnostico.peso, turnos.diagnostico.temperatura,turnos.diagnostico.presion,turnos.diagnostico.valor1,turnos.diagnostico.valor2,turnos.diagnostico.valor3],
           
            ],
          })

          
         }
       })
       
       doc.save("Historia Clinica -" + this.perfil.nombre +"_"+this.perfil.apellido)
     })
     
     
    
  }



  ngOnInit(): void {

    this.authSvc.afAuth.authState.subscribe(user=>{
      
      if(user!=null)
      {
        this.usuarioLogeado = user.email
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


    this.http.get('/assets/imagenes/icono-cli2.png', { responseType: 'blob' })
    .subscribe(res => {
      const reader = new FileReader();
      reader.onloadend = () => {
        var base64data = reader.result;                
            
            this.urlImg = base64data;
      }

      reader.readAsDataURL(res); 
      // console.log(res);
    });
      
    
  }


 

}
