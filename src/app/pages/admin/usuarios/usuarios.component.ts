import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Turno } from 'src/app/clases/turno';
import { TurnosService } from 'src/app/services/turnos.service';
import Swal from 'sweetalert2';
import { take } from 'rxjs/operators';
import * as XLSX from 'xlsx';
 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  turnos$ : Observable<Turno[]>;
  searchValue : string;

  turno : Turno;
  reseniaCalificacion : string;
  mostrarResenia : string;
  mostrarDiagnostico = [];
  reseniaEstado : string;

  array = [];

  constructor(private turnosSvc : TurnosService) 
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

          if(turno.especialidad == turnos.especialidad && turno.emailPaciente == turnos.emailPaciente)
          {
             this.mostrarDiagnostico = turnos.diagnostico;
             this.mostrarResenia = turnos.resenia;
          }
        })
      })

    }
    
  }


  exportExcel(): void
  {
    
    
    /* pass here the table id */
     let element = document.getElementById('excel-table');
     const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    
    
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, "Historial-Usuarios.xlsx");
 
  }

  ngOnInit(): void {
    
  }

}
