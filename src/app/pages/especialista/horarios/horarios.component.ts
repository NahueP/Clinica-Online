import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Especialista } from 'src/app/clases/especialista';
import { AuthService } from 'src/app/services/auth.service';
import { TurnosService } from 'src/app/services/turnos.service';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery'
import { AlertService } from 'src/app/services/alert.service';
import { take, map, tap } from 'rxjs/operators';



@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {


  sabado : boolean = false;
  email:string
  hours = {desde: '8:00', hasta: '18:00', duracion: 30}
  sabHours = {desde: '8:00', hasta: '18:00', duracion: 30}

  public formHorario! : FormGroup;

  especialistas$ : Observable<Especialista[]>;
  listaEspecialidades = [];

  constructor(private authSvc : AuthService, private usuarioSvc : UsuarioFireService, private turnoSvc: TurnosService, private router:Router, private fb : FormBuilder, private alertas: AlertService) 
  { 
    this.especialistas$ = this.usuarioSvc.obtenerTodos('especialistas').valueChanges();
    
  }

  ngOnInit(): void {
    //traer usuario logeado y chequear si existe en especialistas y se setearlo.
    this.authSvc.afAuth.user.subscribe(user =>{
      if(user!=null)
      {
        this.email = user.email;
      }
      
    })
      
    this.especialistas$.subscribe(lista=>{
      lista.forEach(user=>{
        
        if(user.email == this.email)
        {

          this.listaEspecialidades = user.especialidad;
        }


      })
    })

    this.formHorario = this.fb.group(
      {
       'dias': ['',Validators.requiredTrue,],
       'horas': ['',Validators.requiredTrue],
       'especialidades': ['',Validators.required],
       
      

      }
    )
    
      
    
  }

  obtenerDuracion() : number
  {
    let duracion1 = $("#btnDuracion1").is(':checked');
    let duracion2 = $("#btnDuracion2").is(':checked');
    let duracion3 = $("#btnDuracion3").is(':checked');
  
    
    let duracion : number;

    if(duracion1)
    {
      duracion = 30;
    }
    if(duracion2)
    {
      duracion = 45;
    }
    if(duracion3)
    {
      duracion = 60;
    }


    return duracion;

  }


  // obtenerHoras() : number[]
  // {

  //   let hora1 = $("#btnHora1").is(':checked');
  //   let hora2 = $("#btnHora2").is(':checked');
  //   let hora3 = $("#btnHora3").is(':checked');
  //   let hora4 = $("#btnHora4").is(':checked');
  //   let hora5 = $("#btnHora5").is(':checked');
  //   let hora6 = $("#btnHora6").is(':checked');
  //   let hora7 = $("#btnHora7").is(':checked');
  //   let hora8 = $("#btnHora8").is(':checked');
  //   let hora9 = $("#btnHora9").is(':checked');
  //   let hora10 = $("#btnHora10").is(':checked');
  //   let hora11 = $("#btnHora11").is(':checked');
  //   let hora12 = $("#btnHora12").is(':checked');

  //   let horas : number[] = [];
    
    
    
  //   if(hora1)
  //   {
  //     horas.push(8);
  //   }
  //   if(hora2)
  //   {
  //     horas.push(9);
  //   }
  //   if(hora3)
  //   {
  //     horas.push(10);
  //   }
  //   if(hora4)
  //   {
  //     horas.push(11);
  //   }
  //   if(hora5)
  //   {
  //     horas.push(12);
  //   }
  //   if(hora6)
  //   {
  //     horas.push(13);
  //   }
  //   if(hora7)
  //   {
  //     horas.push(14);
  //   }
  //   if(hora8)
  //   {
  //     horas.push(15);
  //   }
  //   if(hora9)
  //   {
  //     horas.push(16);
  //   }
  //   if(hora10)
  //   {
  //     horas.push(17);
  //   }
  //   if(hora11)
  //   {
  //     horas.push(18);
  //   }
  //   if(hora12)
  //   {
  //     horas.push(19);
      
  //   }


  //   return horas;
  // }

  obtenerHoras() : string[]
  {

    let hora1 = $("#btnHora1").is(':checked');
    let hora2 = $("#btnHora2").is(':checked');
    let hora3 = $("#btnHora3").is(':checked');
    let hora4 = $("#btnHora4").is(':checked');
    let hora5 = $("#btnHora5").is(':checked');
    let hora6 = $("#btnHora6").is(':checked');
    let hora7 = $("#btnHora7").is(':checked');
    let hora8 = $("#btnHora8").is(':checked');
    let hora9 = $("#btnHora9").is(':checked');
    let hora10 = $("#btnHora10").is(':checked');
    let hora11 = $("#btnHora11").is(':checked');
    let hora12 = $("#btnHora12").is(':checked');

    let horas : string[] = [];
    let duracion = this.obtenerDuracion();
    
    
    if(hora1)
    {
      horas.push('8:00');
      if(duracion == 30)
      {
        horas.push('8:30');
      }
    }
    if(hora2)
    {
      horas.push('9:00');
      if(duracion == 30)
      {
        horas.push('9:30');
      }
    }
    if(hora3)
    {
      horas.push('10:00');
      if(duracion == 30)
      {
        horas.push('10:30');
      }
    }
    if(hora4)
    {
      horas.push('11:00');
      if(duracion == 30)
      {
        horas.push('11:30');
      }
    }
    if(hora5)
    {
      horas.push('12:00');
      if(duracion == 30)
      {
        horas.push('12:30');
      }
    }
    if(hora6)
    {
      horas.push('13:00');
      if(duracion == 30)
      {
        horas.push('13:30');
      }
    }
    if(hora7)
    {
      horas.push('14:00');
      if(duracion == 30)
      {
        horas.push('14:30');
      }
    }
    if(hora8)
    {
      horas.push('15:00');
      if(duracion == 30)
      {
        horas.push('15:30');
      }
    }
    if(hora9)
    {
      horas.push('16:00');
      if(duracion == 30)
      {
        horas.push('16:30');
      }
    }
    if(hora10)
    {
      horas.push('17:00');
      if(duracion == 30)
      {
        horas.push('17:30');
      }
    }
    if(hora11)
    {
      horas.push('18:00');
      if(duracion == 30)
      {
        horas.push('18:30');
      }
    }
    if(hora12)
    {
      // horas.push('19:00'); a esta hora cierra
    }

    
    return horas;
  }

 



  obtenerDias() 
  {
    let lunes = $("#btnLun").is(':checked');
    let martes = $("#btnMar").is(':checked');
    let miercoles = $("#btnMie").is(':checked');
    let jueves = $("#btnJue").is(':checked');
    let viernes = $("#btnVie").is(':checked');
    let sabado = $("#btnSab").is(':checked');

    let horas = this.obtenerHoras();
    let duracion = this.obtenerDuracion();
    let horarios = [];

    if(lunes)
    {
      horarios.push({dia:'Lunes',horas: horas, duracion: duracion})
    }
    if(martes)
    {
      horarios.push({dia:'Martes',horas: horas, duracion: duracion})
    }
    if(miercoles)
    {
      horarios.push({dia:'Miercoles',horas: horas, duracion: duracion })
    }
    if(jueves)
    {
      horarios.push({dia:'Jueves',horas: horas, duracion: duracion})
     
    }
    if(viernes)
    {
      horarios.push({dia:'Viernes',horas: horas, duracion: duracion})
    }
    if(sabado)
    {
      horarios.push({dia:'Sabado',horas: horas, duracion: duracion})
    }

    
    return horarios;

  }


  guardarHorario()
  {
    let especialista : Especialista = new Especialista();

    especialista.email = this.email;
    especialista.horarios = this.obtenerDias();
    especialista.especialidad = this.formHorario.get('especialidades').value;
    let detener :boolean = false;

    this.turnoSvc.obtenerTodosTurnos('horarios').snapshotChanges().pipe(take(1)).subscribe(list=>{
      list.forEach((response):any => {

        let horario : any = response.payload.doc.data();
        horario.id = response.payload.doc.id;
        
        if(detener==false)
        {
         if(horario.email == this.email && horario.especialidad == especialista.especialidad)
         {
            this.turnoSvc.actualizarTurnos('horarios', JSON.parse( JSON.stringify(especialista)), horario.id);
            detener = true;
            this.alertas.mostraAlertaSimple("Se han actualizado los horarios!","Horarios Actualizados","success");
         }
        }
        
      });

      if(detener==false)
      {
        this.turnoSvc.crearTurno('horarios',JSON.parse( JSON.stringify(especialista)) );
        this.alertas.mostraAlertaSimple("Se han guardado los horarios","Horarios Guardados","success");
      }
    });
    

    
  }

  setSabado(){
    this.sabado = this.sabado ? false : true
  }

  
}
