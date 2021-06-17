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
import { take, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public especialistas: Especialista[] = [];
  public emailVerificado: boolean;
  logueado : boolean = false;
 
 

  constructor(public afAuth : AngularFireAuth, private authSvc : AngularFireDatabase,private alertas : AlertService ,private router : Router, private usuarioSvc : UsuarioFireService) 
  {
    
  }




   async sendEmailVerification() 
   {
      await (await this.afAuth.currentUser).sendEmailVerification();
   }


   tipoUsuario(coleccion:string,email : string)
   {
    
     let detener : boolean = false;
     let especialistaHabilitado: boolean = false;

     this.usuarioSvc.obtenerTodos(coleccion).snapshotChanges().pipe(take(1)).subscribe(snap=>{ //(pipe(take(1))) hace que no me lo traiga repetidas veces
      snap.forEach((response):any=>{

      let usuario : any = response.payload.doc.data();

       if(detener == false)
       {
        if(usuario.email == email)
        {
         
          if(coleccion == 'especialistas')
          {
            especialistaHabilitado = usuario.aprobado;
          }

          detener = true;
        } 
       }
      })

      if(detener == true)
      {
        if(coleccion == 'administradores'){
          this.router.navigateByUrl('home/' + 'admin');
        }
        else
        {
          if(coleccion == 'especialistas' && especialistaHabilitado == true)
          {
             this.router.navigateByUrl('home/' + 'especialista');
           
          }
          else
          {
            if(coleccion == 'especialistas' && especialistaHabilitado == false)
            {
              this.alertas.mostraAlertaSimple('Su cuenta aun no fue habilitada por un administrador', 'Acceso Denegado', 'error');
            }
            else
            {
              if(coleccion = 'pacientes')
              {
                this.router.navigateByUrl('home/' + 'paciente')
              }
            }
            
          }
        }
        
      }
    })

   }
  


   SignIn(email: string, password:string) {
    
    return new Promise((resolve, rejected) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(response => {

        if(response && response.user.emailVerified || (response.user.email == 'admin@test.com' || response.user.email == 'ramapala182@gmail.com' || response.user.email == 'drhouse@test.com' || response.user.email == 'correo@test.com' )) 
        {
          
          this.tipoUsuario('administradores',response.user.email);
          this.tipoUsuario('especialistas',response.user.email);
          this.tipoUsuario('pacientes',response.user.email);
         
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
    
    await this.afAuth.signOut();
    this.router.navigateByUrl('ingresar/login');
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




  

  
}
