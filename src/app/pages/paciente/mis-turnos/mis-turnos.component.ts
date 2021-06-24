import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TurnosService } from 'src/app/services/turnos.service';
import { Turno } from '../../../clases/turno';
import { take } from 'rxjs/operators';
import * as $ from 'jquery'
import Swal from 'sweetalert2';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.scss']
})
export class MisTurnosComponent implements OnInit {

  turnos$ : Observable<Turno[]>;
  searchValue : string;
  usuarioLogeado : string;

  turno : Turno;
  reseniaCalificacion : string;
  mostrarResenia : string;
  mostrarDiagnostico = [];
  reseniaEstado : string="";

  reseniaEncuesta : string="";

  constructor(private turnosSvc : TurnosService, private authSvc : AuthService, private alertas : AlertService) 
  { 
    this.turnos$ = this.turnosSvc.obtenerTodosTurnos('turnos').valueChanges();
  }

  cancelarTurno(turno: Turno)
  {
    if(turno.estado == "Pendiente" || turno.estado == "Aceptado")
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

                    if(turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente)
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
    
    if(turno.estado == "Realizado")
    {
      this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
        lista.forEach(response=>{
          let turnos : any = response.payload.doc.data();

          if(turno.id == turnos.id && turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente && turno.estado == turnos.estado)
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
  
            if(turno.id == turnos.id && turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente && turno.estado == turnos.estado)
            {
               this.mostrarResenia = turnos.resenia;
            }
          })
        })

      }
    }
  }

  getTurno(turno : Turno)
  {
    this.turno = turno;
  }

  encuesta()
  {
    let turno = this.turno;
    let radio1 = $("#radioEncuesta1").is(':checked');
    let radio2 = $("#radioEncuesta2").is(':checked');
    let radio3 = $("#radioEncuesta3").is(':checked');
    let radio4 = $("#radioEncuesta4").is(':checked');
    let radio5 = $("#radioEncuesta5").is(':checked');

    let pregunta1 : string;
    let pregunta2 : string;
    if(radio1)
    {
      pregunta1 = 'Me gusta';
    }
    if(radio2)
    {
      pregunta1 = 'Podria estar mejor';
    }
    if(radio3)
    {
      pregunta1 = 'No me gusta';
    }
    if(radio4)
    {
      pregunta2 = 'Es sencillo y rapido';
    }
    if(radio5)
    {
      pregunta2 = 'Es complicado y confuso';
    }

    const encuesta = {
      pregunta1: pregunta1,
      pregunta2: pregunta2,
      resenia: this.reseniaEncuesta
    };


    this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
      lista.forEach(response=>{
        let turnos : any = response.payload.doc.data();

        turnos.encuesta = encuesta;

        if(turno.id == turnos.id && turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente)
        {
          this.turnosSvc.actualizarTurnos('turnos',turnos,turnos.id);
          this.alertas.mostraAlertaSimple("Su encuesta se envió correctamente","Gracias!", "success");
        }
      })
    })


  }

  calificar()
  {
    let turno = this.turno;
    let excelente = $("#radioCalif1").is(':checked');
    let bueno = $("#radioCalif2").is(':checked');
    let mala = $("#radioCalif3").is(':checked');
    
    let calif : string;

    if(excelente)
    {
      calif = 'Excelente';
    }
    if(bueno)
    {
      calif = 'Buena';
    }
    if(mala)
    {
      calif = 'No estoy conforme';
    }

    const calificacion = {
      calificacion: calif,
      resenia: this.reseniaCalificacion
    };

   
    this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
          lista.forEach(response=>{
            let turnos : any = response.payload.doc.data();
            turnos.calificacion = calificacion;
  
            if(turno.id == turnos.id && turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente)
            {
              this.turnosSvc.actualizarTurnos('turnos',turnos,turnos.id);
              this.alertas.mostraAlertaSimple("Su calificación se guardo correctamente","Gracias!", "success");

            }
          })
        })

      


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



  ngOnInit(): void {
    this.authSvc.afAuth.user.subscribe(user=>{
      if(user!=null)
      {
        this.usuarioLogeado = user.email;
      }
    })
  }

}
