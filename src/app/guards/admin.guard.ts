import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { take, map, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioFireService } from '../services/usuario-fire.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  usuarioLogeado : string;
  constructor(private authSvc : AuthService, private router : Router,public db : AngularFirestore, private usuarioFire : UsuarioFireService)
  {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authSvc.afAuth.authState.pipe(take(1)).pipe(map(authState => !!authState)).pipe(tap(auth => {
        if(auth)
        {
          // let ruta : string = 'ingresar/login';
          let detener : boolean = false;
          let existe : boolean = false;

          this.authSvc.afAuth.authState.subscribe(user=>{

            if(user!=null)
            {
              this.usuarioLogeado = user.email; 
                
            }
                 
          });

              this.usuarioFire.obtenerTodos('administradores').snapshotChanges().pipe(take(1)).subscribe(admSnap=>{
                admSnap.forEach((response):any=>{
                  let admin : any = response.payload.doc.data();
                  
                   if(detener == false)
                   {
                    //  console.log(admin.email );
                    //  console.log(this.usuarioLogeado);
                    if(admin.email == this.usuarioLogeado)
                    {
                      // console.log('Aca chequeo si son iguales');
                      // console.log(admin.email);
                      // console.log(this.usuarioLogeado);
                      // ruta = '/home/admin';
                      existe = true;
                      detener = true;
                    }
                   }
          
                })
                // console.log('valor ruta: '+ ruta);
                if(existe == false)
                {
      
                  this.authSvc.desloguear();
                  
                }
                
                
              })
              
        }
        
      }));
  }


  
}
