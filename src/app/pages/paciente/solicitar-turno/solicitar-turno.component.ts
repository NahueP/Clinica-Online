import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidad } from 'src/app/clases/especialidad';
import { Especialista } from 'src/app/clases/especialista';
import { TurnosService } from 'src/app/services/turnos.service';
import { UsuarioFireService } from '../../../services/usuario-fire.service';
import { Turno } from '../../../clases/turno';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss']
})
export class SolicitarTurnoComponent implements OnInit {

  especialidades$ : Observable<Especialidad[]>;
  especialistas$ : Observable<Especialista[]>;
  listaFiltrada = [];
  

  //card
  especialistaInfo : Especialista = new Especialista();
  seleccionado : boolean = false;

  //turnos
  horarios$ : Observable<any[]>;
  esp : string;
  especialidad : string;
  listaTurnos = [];
  listaRecomendados = [];

  //paciente
  emailPaciente : string;
  nombrePaciente : string;
  

  constructor(private usuarioSvc : UsuarioFireService, private turnosSvc : TurnosService, private authSvc: AuthService, private alertas: AlertService) 
  {
    this.especialidades$ = this.usuarioSvc.obtenerTodos('especialidades').valueChanges();
    this.especialistas$ = this.usuarioSvc.obtenerTodos('especialistas').valueChanges();
    this.horarios$ = this.turnosSvc.obtenerTodosTurnos('horarios').valueChanges();
  }


 


  filtrarEspecialidad(especialidad: string)
  {
    this.esp = especialidad;
    this.listaFiltrada.splice(0,this.listaFiltrada.length);
    this.listaRecomendados.splice(0,this.listaRecomendados.length);
    
    let hoy : Date = new Date();

      this.especialistas$.subscribe(esp=>{
       esp.forEach(especialista=>{
         if(especialista.especialidad.includes(especialidad))
         {
            this.listaFiltrada.push(especialista);


            this.horarios$.subscribe(response=>{
              response.forEach(horario=>{
                let listaHorario = horario.horarios;
          
                if(horario.especialidad == especialidad)
                {
                  listaHorario.forEach(element => {

                      let fechaTurno;
                  
                        if(hoy.getDay() < this.getNumeroDia(element.dia))
                        {
                           fechaTurno = this.nextDayWeek(this.getNumeroDia(element.dia),7).toLocaleDateString();

                           this.listaRecomendados.push({
                            especialista: especialista.nombre + " " + especialista.apellido,
                            email: especialista.email,
                            especialidad: especialidad, 
                            hora: element.horas[0],
                            dia: element.dia,
                            fecha: fechaTurno,
                            duracion: element.duracion
                          });
                        }

                   
                  });

                  
                  
                   
                }
              })
            })



         }
       })
     })

  }

  turnoRecomendado(reco : any)
  {
      let turno : Turno = new Turno;
      const horario = {
        dia: reco.dia,
        hora: reco.hora,
        fecha: reco.fecha,
        duracion: reco.duracion,
      };

      turno.emailPaciente = this.emailPaciente;
      turno.emailEspecialista = reco.email;
      turno.nombreEspecialista = reco.especialista;
      turno.nombrePaciente = this.nombrePaciente;
    
      turno.especialidad = this.esp;
      turno.turno = horario;
      
      turno.estado = "Pendiente";
  
      let detener :boolean = false;
  
      this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(list=>{
        list.forEach((response):any => {
  
          let turnoFire : any = response.payload.doc.data();
          turnoFire.id = response.payload.doc.id;
          
  
          if(detener==false)
          {
           if(turnoFire.emailPaciente == turno.emailPaciente && turnoFire.especialidad == turno.especialidad)
           {
              if(turnoFire.estado != "Cancelado" && turnoFire.estado != "Rechazado" && turnoFire.estado != "Realizado")
              {
                detener = true;
                this.alertas.mostraAlertaSimple("Ya tiene un turno con esta especialidad!","Turno Existente","warning");
              }
            
           }
          }
  
          
        });
  
        if(detener==false)
          {
           this.turnosSvc.crearTurno('turnos', JSON.parse(JSON.stringify(turno)));
           console.log('Se guardo turno');
          this.alertas.mostraAlertaSimple("Se agendo el turno","Turno Guardado","success");
          
        }
  
        
      });
      
  }





  selectEspecialista(especialista : Especialista)
  {
    this.especialidad = this.esp;
    this.seleccionado = true;
    this.listaTurnos.splice(0,this.listaTurnos.length);
  

    this.especialistaInfo.nombre = especialista.nombre;
    this.especialistaInfo.apellido = especialista.apellido;
    this.especialistaInfo.especialidad = especialista.especialidad;
    this.especialistaInfo.edad = especialista.edad;
    this.especialistaInfo.email = especialista.email;
    this.especialistaInfo.fotoPerfil = especialista.fotoPerfil;
    
    let especialidades = especialista.especialidad;
    let detener : boolean = false;
    let hoy : Date = new Date();

    
    this.horarios$.subscribe(response=>{
      response.forEach(horario=>{
        
        if(horario.email == especialista.email)
        {
          if(!detener)
          {
            especialidades.forEach(esp=>{
              if(esp == this.especialidad && esp == horario.especialidad)
              {
                let listaHorario = horario.horarios;

                listaHorario.forEach(arrayHorario=>{
                   
                  for(let i=0;i<arrayHorario.horas.length ; i++)
                  {
                  
                    let fechaTurno;
                  
                    if(hoy.getDay() < this.getNumeroDia(arrayHorario.dia))
                    {
                       fechaTurno = this.nextDayWeek(this.getNumeroDia(arrayHorario.dia),7).toLocaleDateString();
                    }
                    
                    if(arrayHorario.dia == 'Sabado')
                    {
                      if(parseInt(arrayHorario.horas[i]) < 14)
                      {
                        this.listaTurnos.push({dia: arrayHorario.dia , hora: arrayHorario.horas[i], fecha: fechaTurno, duracion: arrayHorario.duracion});
                      }
                    }
                    else
                    {
                      this.listaTurnos.push({dia: arrayHorario.dia , hora: arrayHorario.horas[i], fecha: fechaTurno, duracion: arrayHorario.duracion});
                    }
                  
                  }
                })

                listaHorario.forEach(arrayHorario=>{
                   
                  for(let i=0;i<arrayHorario.horas.length ; i++)
                  {
                    
                    let fechaTurno = this.nextDayWeek(this.getNumeroDia(arrayHorario.dia),14).toLocaleDateString();
                    
                    if(arrayHorario.dia == 'Sabado')
                    {
                      if(parseInt(arrayHorario.horas[i]) < 14)
                      {
                        this.listaTurnos.push({dia: arrayHorario.dia , hora: arrayHorario.horas[i], fecha: fechaTurno, duracion: arrayHorario.duracion});
                      }
                    }
                    else
                    {
                      this.listaTurnos.push({dia: arrayHorario.dia , hora: arrayHorario.horas[i], fecha: fechaTurno, duracion: arrayHorario.duracion});
                    }
                  
                  }
                })

                
                

                detener = true;
              }
            })

          }
         
        }

      })
    })
  }

  guardarTurno(horario : any)
  {
    let turno : Turno = new Turno();

    turno.emailPaciente = this.emailPaciente;
    turno.emailEspecialista = this.especialistaInfo.email;
    turno.nombreEspecialista = this.especialistaInfo.nombre + " " + this.especialistaInfo.apellido;
    turno.nombrePaciente = this.nombrePaciente;

    turno.especialidad = this.especialidad;
    turno.turno = horario;
    turno.estado = "Pendiente";

    let detener :boolean = false;

    this.turnosSvc.obtenerTodosTurnos('turnos').snapshotChanges().pipe(take(1)).subscribe(list=>{
      list.forEach((response):any => {

        let turnoFire : any = response.payload.doc.data();
        turnoFire.id = response.payload.doc.id;
        

        if(detener==false)
        {
         if(turnoFire.emailPaciente == turno.emailPaciente && turnoFire.especialidad == turno.especialidad)
         {
            if(turnoFire.estado != "Cancelado" && turnoFire.estado != "Rechazado" && turnoFire.estado != "Realizado")
            {
              detener = true;
              this.alertas.mostraAlertaSimple("Ya tiene un turno con esta especialidad!","Turno Existente","warning");
            }
          
         }
        }

        
      });

      if(detener==false)
        {
         this.turnosSvc.crearTurno('turnos', JSON.parse(JSON.stringify(turno)));
         console.log('Se guardo turno');
        this.alertas.mostraAlertaSimple("Se agendo el turno","Turno Guardado","success");
        
      }

      
    });





  }


  getNumeroDia(dia : string) : number
  {
   
    let retorno : number;
    

    if(dia == 'Lunes')
    {
      retorno = 1;
    }
    if(dia == 'Martes')
    {
      retorno = 2;
    }
    if(dia == 'Miercoles')
    {
      retorno = 3;
    }
    if(dia == 'Jueves')
    {
      retorno = 4;
    }
    if(dia == 'Viernes')
    {
      retorno = 5;
    }
    if(dia == 'Sabado')
    {
      retorno = 6;
    }

    
     
    return retorno;
     
    
     
  }

   


   nextDayWeek(dayOfWeek : number, cantidad : number) 
   {
    var now = new Date()
    var result = new Date( now.getFullYear(), now.getMonth(), now.getDate() + (7 + dayOfWeek - now.getDay()) % cantidad)
  
    if (result < now)
    {
      
        result.setDate(result.getDate() + cantidad)
    }
    else
    {
       if(dayOfWeek > 5)
         {
           result.setDate(result.getDate() )
         }
    }
   
    
    return result
  }
  
  
  
  

  ngOnInit(): void 
  {
    this.authSvc.afAuth.user.subscribe(user =>{
      if(user!=null)
      {
        this.emailPaciente = user.email;

        this.usuarioSvc.obtenerTodos('pacientes').valueChanges().subscribe(user=>{
          user.forEach(paciente=>{
            if(this.emailPaciente == paciente.email)
            {
              this.nombrePaciente = paciente.nombre + " " + paciente.apellido;
             
            }
          })
        })

        
       
      }
      
    })
    
  }


  

}
