import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TurnosService } from 'src/app/services/turnos.service';
import { Turno } from '../../../clases/turno';
import Swal from 'sweetalert2';
import { take } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home-especialista',
  templateUrl: './home-especialista.component.html',
  styleUrls: ['./home-especialista.component.scss']
})
export class HomeEspecialistaComponent implements OnInit {

  usuarioLogeado : string;
  turnos$ : Observable<Turno[]>;
  searchValue : string;

  //diagnostico
  altura : string;
  peso : string;
  temperatura : string;
  presion : string;
  resenia : string;
  turno : Turno;
  mostrarResenia : string;
  mostrarDiagnostico = [];
  reseniaEstado : string;


  //datos dinamicos
  flagDato1 : boolean = false;
  flagDato2 : boolean = false;
  flagDato3 : boolean = false;
  contador : number = 0;
  dato1 : string="";
  valor1: string="";
  dato2 : string="";
  valor2: string="";
  dato3 : string="";
  valor3: string="";

  constructor(private turnosSvc : TurnosService, private authSvc : AuthService, private spinner: NgxSpinnerService) 
  { 
    this.turnos$ = this.turnosSvc.obtenerTodosTurnos('turnos').valueChanges();
  }


  removerDato()
  {

    if(this.contador == 1)
    {
      this.flagDato1 = false;
      this.dato1 = "";
      this.valor1 = "";
    }
    if(this.contador  == 2)
    {
      this.flagDato2 = false;
      this.dato2 = "";
      this.valor2 = "";
    }
    if(this.contador == 3)
    {
      this.flagDato3 = false;
      this.dato3 = "";
      this.valor3 = "";
    }

    this.contador--;

    if(this.contador < 0)
     {
       this.contador = 0;
     }

  }

  agregarDato()
  {
     this.contador++;
    
     if(this.contador > 3)
     {
       this.contador = 3;
     }
     
    if(this.contador == 1)
    {
      this.flagDato1 = true;
    }
    if(this.contador  == 2)
    {
      this.flagDato2 = true;
    }
    if(this.contador == 3)
    {
      this.flagDato3 = true;
    }
    

  }



  ngOnInit(): void {
    this.mostrarSpinner(1000);

    this.authSvc.afAuth.user.subscribe(user=>{
      if(user!=null)
      {
        this.usuarioLogeado = user.email;
      }
    })
  }

  estadoTurno(turno : Turno)
  {
    this.turno = turno;
  }


  aceptarTurno(turno: Turno)
  {
    if(turno.estado == "Pendiente")
    {
      this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
        lista.forEach(response=>{
           let turnos : any = response.payload.doc.data();
           turnos.id = response.payload.doc.id;
          

           if(turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente && turnos.estado=='Pendiente')
           {
              turnos.estado='Aceptado';   
            
              this.turnosSvc.actualizarTurnos('turnos',turnos,turnos.id);
            
           }

         })
      })
    }

  }

  rechazarTurno(turno: Turno)
  {
  
    if(turno.estado == "Pendiente")
    {
      this.guardarResenia().then(resenia=>{
      
      if(resenia!= null)
      {
      this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
        lista.forEach(response=>{
           let turnos : any = response.payload.doc.data();
           turnos.id = response.payload.doc.id;
          
           
           turnos.resenia = resenia;

           if(turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente && turnos.estado=='Pendiente')
           {
            turnos.estado='Rechazado';
             this.turnosSvc.actualizarTurnos('turnos',turnos,turnos.id);
           }

         })
      })
    }
    })
    }
  }


  finalizarTurno()
  {
    
    const diagnostico = {
      altura: this.altura,
      peso: this.peso,
      temperatura: this.temperatura,
      presion: this.presion,
      dato1: this.dato1,
      valor1: this.valor1,
      dato2: this.dato2,
      valor2: this.valor2,
      dato3: this.dato3,
      valor3: this.valor3,
    };
   
      
        if(this.resenia != null)
        {
          
          this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(lista=>{
             lista.forEach(response=>{
                let turnos : any = response.payload.doc.data();
                turnos.id = response.payload.doc.id;
          
                turnos.resenia = this.resenia;
                turnos.diagnostico = diagnostico;

                if(this.turno.id == turnos.id && this.turno.especialidad == turnos.especialidad && this.turno.emailPaciente == turnos.emailPaciente && turnos.estado == 'Aceptado')
                {
                  turnos.estado='Realizado';
                  this.turnosSvc.actualizarTurnos('turnos',turnos,turnos.id);
                   console.log("se envio");
                }
              

               })
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
      if(turno.estado == "Rechazado" || turno.estado == 'Cancelado')
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


  mostrarSpinner(seg : number)
  {
    this.spinner.show();

    setTimeout(()=>{
      this.spinner.hide();
    },seg);
  }

}
