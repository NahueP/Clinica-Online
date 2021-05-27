import { Injectable } from '@angular/core';
import Swal from'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AlertService {
  
  public reenvioEmail:boolean = false;

  constructor() { }

  async mostrarAlertaConfirmacionEmail(mensaje:string,titulo:string,mensajeConfirmed:string){
    const result = await Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Reenviar email de verificación'
    });
    if (result.isConfirmed) {
      Swal.fire(
        'Enviado!',
        mensajeConfirmed,
        'success'
      );
      this.reenvioEmail = true;
    }
    else {
      this.reenvioEmail = false;

    }
    return result;
  }

  mostraAlertaSimple(mensaje:string,titulo:string, icono : any){
    
    Swal.fire({
      icon: icono,
      title: titulo,
      text: mensaje,
    })
  }
}
