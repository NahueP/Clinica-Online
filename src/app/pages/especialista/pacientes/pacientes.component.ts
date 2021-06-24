import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from 'src/app/clases/turno';
import { TurnosService } from 'src/app/services/turnos.service';
import Swal from 'sweetalert2';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  turnos$ : Observable<Turno[]>;
  searchValue : string;

  turno : Turno;
  reseniaCalificacion : string;
  mostrarResenia : string;
  mostrarDiagnostico = [];
  reseniaEstado : string;
  usuarioLogeado : string;

  constructor(private authSvc : AuthService,private turnosSvc : TurnosService) 
  { 
    this.turnos$ = this.turnosSvc.obtenerTodosTurnos('turnos').valueChanges();
  }

  verResenia(turno : Turno)
  {
    
    
    if(turno.estado == "Realizado")
    {
      this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
        lista.forEach(response=>{
          let turnos : any = response.payload.doc.data();

          if(turno.id == turnos.id && turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente)
          {
             this.mostrarDiagnostico = turnos.diagnostico;
             this.mostrarResenia = turnos.resenia;
          }
        })
      })

    }
    
  }

  ngOnInit(): void {

    this.authSvc.afAuth.authState.subscribe(user=>{
      
      if(user!=null)
      {
        this.usuarioLogeado = user.email
        
          
      }
    })

  }

}
