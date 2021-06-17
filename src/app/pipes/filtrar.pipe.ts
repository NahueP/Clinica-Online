import { Pipe, PipeTransform } from '@angular/core';
import { Turno } from '../clases/turno';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(Turnos: Turno[], searchValue: string): Turno[] {

    if(!Turnos || !searchValue)
    {
      return Turnos;
    }

    return Turnos.filter(turno=>
      turno.nombreEspecialista.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      turno.nombrePaciente.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      turno.especialidad.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      
    );
      
    
  }

}
