import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import * as $ from 'jquery'
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { TurnosService } from 'src/app/services/turnos.service';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {

  user
  series = [];
  semana = [];
 
  dias: string[] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  apretado = 'opxesp'
  nombreSerie : string="";

  especialidades = [];
  turnos = [];
  especialistas = [];

  constructor(private authSvc : AuthService, private usuarioSvc: UsuarioFireService, private turnosSvc : TurnosService, private router:Router) 
  { 
  }

  ngOnInit(): void {

    this.turnosSvc.obtenerTodosTurnos('turnos').valueChanges().pipe(take(1)).subscribe(list=>{
      list.forEach(element=>{
        this.turnos.push(element);
        
      })
      
    })

    this.usuarioSvc.obtenerTodos('especialistas').valueChanges().pipe(take(1)).subscribe(list=>{
      list.forEach(element=>{
        this.especialistas.push(element);
      })
      
    })

    this.usuarioSvc.obtenerTodos('especialidades').valueChanges().pipe(take(1)).subscribe(list=>{
      list.forEach(element=>{
        this.especialidades.push(element);
      })
      
    })


  }

 

  options:any = {
    chart: {
      type: 'bar',
      backgroundColor: 'white',
      plotBackgroundColor: 'rgb(255, 255, 210)',
      plotShadow: true,
      plotBorderWidth: 1
    },
    title: {
      text: 'Sample Scatter Plot'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function() {
        return Highcharts.format('cantidad', this.x)+ ": " + this.y;
      }
    },
    xAxis: {
      type: 'string',
      labels: {
        formatter: function() {
          
        }
      }
    },
    yAxis:{
      title:{
        text:""
      }
    },
    series: []//this.series 
  }

cargarOperacionesEspecialidades()
  {
    this.cambiarBoton('opxesp')
    this.series = []
    let c_especialidad:number = 0;
    
    for(let especialidad of this.especialidades)
    {
      
        for(let turno of this.turnos)
        {
          if(turno.especialidad == especialidad.nombre)
          {
            c_especialidad++;
          }
        }
      
      
      this.series.push({name: especialidad.nombre, data: [c_especialidad]});
      this.options.series = this.series

      c_especialidad = 0;
    }

    this.cargarCharEspecialidades();
  }

  cargarCharEspecialidades()
  {
    this.options.tooltip = {
      formatter: function() {
        return Highcharts.format('cantidad operaciones', this.x)+ ": " + this.y;
      }
    }

    this.options.chart.type = "bar"
    this.options.yAxis.title.text = "Cantidad de operaciones";
    this.options.title.text = "Operacion por especialidad";
    Highcharts.chart('graficos', this.options);
  }

  cargarCantidadTurnosPorSemana(){
    this.cambiarBoton('turnxdia')

    this.series = []
    let lun:number = 0;
    let mar:number = 0;
    let mie:number = 0;
    let jue:number = 0;
    let vie:number = 0;
    let sab:number = 0;
    
      for(let item of this.turnos)
      { 
        
          if(item.turno.dia == 'Lunes')
          {
               lun++;
          }
          if(item.turno.dia == 'Martes')
          {
               mar++;
          }
          if(item.turno.dia == 'Miercoles')
          {
               mie++;
          }
          if(item.turno.dia == 'Jueves')
          {
               jue++;
          }
          if(item.turno.dia == 'Viernes')
          {
               vie++;
          }
          if(item.turno.dia == 'Sabado')
          {
               sab++;
          }
          
      }


      this.series.push({name: 'Lunes', data: [lun]});
      this.series.push({name: 'Martes', data: [mar]});
      this.series.push({name: 'Miercoles', data: [mie]});
      this.series.push({name: 'Jueves', data: [jue]});
      this.series.push({name: 'Viernes', data: [vie]});
      this.series.push({name: 'Sabado', data: [sab]});
    
      this.options.series = this.series
    

    this.cargarCharCantidadTurnosPorSemana();
  }

cargarCharCantidadTurnosPorSemana(){
    this.options.tooltip = {
      formatter: function() {
        return Highcharts.format('cantidad turnos', this.x)+ ": " + this.y;
      }
    }
    this.options.chart.type = "column"
    this.options.yAxis.title.text = "Cantidad de turnos";
    this.options.title.text = "Cantidad de turnos por dia";
    Highcharts.chart('graficos', this.options);
  }

  cargarTurnosPorProfesional()
  {
    this.cambiarBoton('turnxmed')
    this.series = []
    let c_turnos:number = 0;
    let nombre : string;

    for(let espe of this.especialistas)
    {
      for(let item of this.turnos)
      { 
        
        if(espe.email == item.emailEspecialista)
        {
           c_turnos++;
        }
          
      }

      nombre = espe.nombre + " " + espe.apellido;

      this.series.push({name: nombre, data: [c_turnos]});
      console.log(c_turnos); 
      this.options.series = this.series
      c_turnos = 0;
    }

      this.cargarChartTurnosPorProfesional();


  }

  cargarChartTurnosPorProfesional()
  {
    this.options.tooltip = {
      formatter: function() {
        return Highcharts.format('cantidad turnos', this.x)+ ": " + this.y;
      }
    }
    this.options.chart.type = "column"
    this.options.yAxis.title.text = "Cantidad de turnos";
    this.options.title.text = "Cantidad de turnos por profesional";
    Highcharts.chart('graficos', this.options);
  }

  cargarProfesionalesPorDia()
  {
    this.cambiarBoton('medxdia')

    this.series = []
    
    this.usuarioSvc.obtenerTodos('ingresos').valueChanges().pipe(take(1)).subscribe(list=>{
      list.forEach(dias=>{
        
        this.series.push({name: 'Lunes' , data: [dias.lunes]});
        this.series.push({name: 'Martes' , data: [dias.martes]});
        this.series.push({name: 'Miercoles' , data: [dias.miercoles]});
        this.series.push({name: 'Jueves' , data: [dias.jueves]});
        this.series.push({name: 'Viernes' , data: [dias.viernes]});
        this.series.push({name: 'Sabado' , data: [dias.sabado]});
        
        
      })
      this.options.series = this.series
      this.cargarChartProfesionalesPorDia();
      
    })
    
    
  }

  cargarChartProfesionalesPorDia()
  {
    this.options.tooltip = {
      formatter: function() {
        return Highcharts.format('cantidad profesionales', this.x)+ ": " + this.y;
      }
    }
    this.options.chart.type = "column"
    this.options.yAxis.title.text = "Cantidad de medicos";
    this.options.title.text = "Cantidad de medicos por dia";
    

    Highcharts.chart('graficos', this.options);
  }

  cambiarBoton(id:string){
    switch(id){
      case 'opxesp':
        $("#opxesp").addClass('apretado')
        this.apretado = 'opxesp'
        $("#turnxdia").removeClass('apretado')
        $("#turnxmed").removeClass('apretado')
        $("#medxdia").removeClass('apretado')
        break;
      case 'turnxdia':
        $("#opxesp").removeClass('apretado')
        this.apretado = 'turnxdia'
        $("#turnxdia").addClass('apretado')
        $("#turnxmed").removeClass('apretado')
        $("#medxdia").removeClass('apretado')
        break;
      case 'turnxmed':
        $("#opxesp").removeClass('apretado')
        this.apretado = 'turnxmed'
        $("#turnxdia").removeClass('apretado')
        $("#turnxmed").addClass('apretado')
        $("#medxdia").removeClass('apretado')
        break;
      case 'medxdia':
        $("#opxesp").removeClass('apretado')
        this.apretado = 'medxdia'
        $("#turnxdia").removeClass('apretado')
        $("#turnxmed").removeClass('apretado')
        $("#medxdia").addClass('apretado')
        break;
    }
  }


  

   
  




}
