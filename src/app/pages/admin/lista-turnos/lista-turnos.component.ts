import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from 'src/app/clases/turno';
import { TurnosService } from 'src/app/services/turnos.service';
import Swal from 'sweetalert2';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-lista-turnos',
  templateUrl: './lista-turnos.component.html',
  styleUrls: ['./lista-turnos.component.scss']
})
export class ListaTurnosComponent implements OnInit {

  turnos$ : Observable<Turno[]>;
  searchValue : string;

  turno : Turno;
  reseniaCalificacion : string;
  mostrarResenia : string;
  mostrarDiagnostico = [];
  mostrarCalificacion = [];
  mostrarEncuesta = [];
  reseniaEstado : string;

  constructor(private turnosSvc : TurnosService) 
  { 
    this.turnos$ = this.turnosSvc.obtenerTodosTurnos('turnos').valueChanges();
  }

  ngOnInit(): void {
  }

  cancelarTurno(turno: Turno)
  {
    if(turno.estado == "Pendiente")
    {

      this.guardarResenia().then(resenia=>{

        if(resenia!=null)
        {
             this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
                 lista.forEach(response=>{
                    let turnos : any = response.payload.doc.data();
                    turnos.id = response.payload.doc.id;

                    turnos.estado='Cancelado';
                    turnos.resenia = resenia;

                    if(turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente && turno.emailEspecialista == turnos.emailEspecialista)
                    {
                      this.turnosSvc.actualizarTurnos('turnos',turnos,turnos.id);
                    }
          })

         })
        }

      })
    }
  }

  verResenia(turno : Turno)
  {
    this.reseniaEstado = turno.estado;
    
      if(turno.estado == "Rechazado" || turno.estado == "Cancelado" )
      {
        this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
          lista.forEach(response=>{
            let turnos : any = response.payload.doc.data();
  
            if(turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente && turno.emailEspecialista == turnos.emailEspecialista)
            {
               this.mostrarResenia = turnos.resenia;
            }
          })
        })

      }
    
  }


  verCalificacion(turno : Turno)
  {
    this.reseniaEstado = turno.estado;
    
      if(turno.estado == "Realizado")
      {
        this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
          lista.forEach(response=>{
            let turnos : any = response.payload.doc.data();
  
            if(turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente && turno.emailEspecialista == turnos.emailEspecialista)
            {
               this.mostrarCalificacion = turnos.calificacion;
               console.log(turnos.calificacion);
            }
          })
        })

      }
    
  }

  verEncuesta(turno : Turno)
  {
    this.reseniaEstado = turno.estado;
    
      if(turno.estado == "Realizado")
      {
        this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
          lista.forEach(response=>{
            let turnos : any = response.payload.doc.data();
  
            if(turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente && turno.emailEspecialista == turnos.emailEspecialista)
            {
               this.mostrarEncuesta = turnos.encuesta;
               console.log(turnos.calificacion);
            }
          })
        })

      }
    
  }




  async guardarResenia()
  {
    let retorno : string;

    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Deje un motivo por la cancelación del turno',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Finalizar',
      inputPlaceholder: 'Escriba su motivo aca...',
      inputAttributes: {
        'aria-label': 'Escriba su motivo aca...'
      },
      showCancelButton: true
    })
    
      if (text) 
      {
        Swal.fire(
          'Consulta Cancelada!',
          'Su reseña se guardo correctamente!',
          'success'
        )
        retorno = text;
      }
      
      return retorno;

  }


}
