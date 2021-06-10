import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';
import { AuthService } from './../../services/auth.service';
import { take, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public user$ : Observable<any>= this.authSvc.afAuth.user;
  rutaPerfil : string;
  rutaHome : string;
  esAdmin : boolean = false;
  esEspecialista : boolean = false;
 

  constructor(private authSvc : AuthService, private router: Router, private usuarioSvc : UsuarioFireService) 
  {
    
  }

  ngOnInit(): void {
    this.user$.subscribe(user=>{

      if(user!=null)
      {
         this.tipoUsuario('administradores',user.email);
         this.tipoUsuario('especialistas',user.email);
         this.tipoUsuario('pacientes',user.email);
      }

    })

    
    
  }

  async onLogout()
  {
    try
    {
      await this.authSvc.desloguear();
      
      
    }
    catch(error)
    {
      console.log(error);
      alert(error);
    }
  
  }


  tipoUsuario(coleccion:string,email : string)
   {
    
     let detener : boolean = false;


     this.usuarioSvc.obtenerTodos(coleccion).snapshotChanges().pipe(take(1)).subscribe(snap=>{ 
      snap.forEach((response):any=>{

      let usuario : any = response.payload.doc.data();

       if(detener == false)
       {
        if(usuario.email == email)
        {
          
          detener = true;
     
        } 
       }
      })

      if(detener == true)
      {
        if(coleccion == 'administradores'){
           this.rutaPerfil = 'admin/perfil';
           this.rutaHome = 'home/admin';
           
           this.esAdmin = true;
           
        }
        else
        {
          if(coleccion == 'especialistas')
          {
             this.rutaPerfil = 'especialista/perfil';
             this.rutaHome = 'home/especialista';
            
             this.esEspecialista = true;
           
          }
          else
          {
            if(coleccion = 'pacientes')
            {
              this.rutaPerfil = 'paciente/perfil';
              this.rutaHome = 'home/paciente';
              
            }
          }
        }
        
      }
    })

   }

   irHome()
   {
    this.router.navigateByUrl(this.rutaHome);
   }

   irPerfil() 
   {
     this.router.navigateByUrl(this.rutaPerfil);
    
   }
   
  


}
