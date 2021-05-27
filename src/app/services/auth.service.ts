import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { UsuarioFireService} from './usuario-fire.service';
import { AlertService } from './alert.service';
import { Especialista } from '../clases/especialista';
import { Paciente } from '../clases/paciente';
import { AngularFireDatabase } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any;
  public especialistas: Especialista[] = [];
  public emailVerificado: boolean;
  logueado : boolean = false;
  public logueadoObs : Observable<any>
 

  constructor(public afAuth : AngularFireAuth, private authSvc : AngularFireDatabase,private alertas : AlertService ,private router : Router, private usuarioSvc : UsuarioFireService) 
  {
    
  }




   async sendEmailVerification() 
   {
      await (await this.afAuth.currentUser).sendEmailVerification();
   }

  // verificarSiAdminAprobo(especialista : Especialista){
  //   let retorno = false;
  //   this.especialistas.forEach(user => {

  //     if( especialista.email = user.email){
  //       if( especialista.aprobado == false){
  //         retorno = false;
  //       }
  //       else{
  //         retorno = true;
  //       }
  //     }
      
      
  //   });
  //   return retorno;

  // }

  

  verificarAprobacion(result:any,user:Usuario)
  {
   
     
  }


   SignIn(email: string, password:string) {
    
    return new Promise((resolve, rejected) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(response => {

        if(response && response.user.emailVerified || ( response.user.email == "admin@test.com" || response.user.email == "paciente@test.com" || response.user.email == "especialista@test.com"))
        {
          this.router.navigateByUrl('/home');
        }
        else
        {
          this.alertas.mostrarAlertaConfirmacionEmail('Por favor verifique su correo para ingresar','Correo no verificado','Se ha reenviado la verificacion de correo');
          if(this.alertas.reenvioEmail == true)
          {
            this.sendEmailVerification();
          }
        }
      
        resolve(response);

      }, (error: any) => {
        console.log(error);
        switch (error.code) {
          case "auth/user-not-found":
            rejected("El usuario no existe");
            this.alertas.mostraAlertaSimple("El usuario no existe!", "Error!",'question');
            break;
          case "auth/invalid-email":
            rejected("email invalido");
            this.alertas.mostraAlertaSimple("Correo invalido, intente nuevamente", "Error!",'error');
            break;
          case "auth/wrong-password":
            rejected("clave incorrecta");
            this.alertas.mostraAlertaSimple("Contraseña incorrecta, intente nuevamente", "Error!",'error');
            break;
          default:
            rejected("ERROR");
            break;
        }
      });

    });

  }

  async desloguear(){
    this.isLogged = null;
    await this.afAuth.signOut();
  }

   Register(email:string,password:string, displayName : string) {
    return new Promise<any>((resolve, rejected) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then((response: any) => {

        response.user.updateProfile({displayName: displayName});
        
        resolve(response);
      }, (error: any) => {
        switch (error.code) {
          case "auth/invalid-email":
            rejected("Corre invalido");
            this.alertas.mostraAlertaSimple("Correo Invalido, intente nuevamente", 'Error!','error');
            break;
          case "auth/email-already-in-use":
            rejected("Correo ya registrado");
            this.alertas.mostraAlertaSimple("El correo ingresado ya se encuentra registrado", 'Lo sentimos','warning');
            break;
          default:
            rejected("ERROR");
            break;
        }
      });
    });
  }

  GetCurrentUser() : any {
    return this.afAuth.currentUser;
  }
 
  ChequearLogueado(){
    this.afAuth.authState.subscribe(res=>{
      if(res && res.uid){
        this.logueado = true;
      }
      else{
        this.logueado = false;
      }
    });
    return this.logueado;
  }


  

  
}
