import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService} from 'ngx-spinner';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';
import { Paciente } from 'src/app/clases/paciente';
import { Especialista } from 'src/app/clases/especialista';
import { Administrador } from 'src/app/clases/administrador';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  flag : boolean = false;

  pacientes$: Observable<Paciente[]>;
  especialistas$: Observable<Especialista[]>;
  administradores$: Observable<Administrador[]>;

  listadoPacientes : Paciente[] = [];
  listadoEspecialistas : Especialista[] = [];
  listadoAdministradores : Administrador[] = [];

  pacienteUno : Paciente = new Paciente();
  pacienteDos : Paciente = new Paciente();;
  especialistaUno : Especialista = new Especialista();
  especialistaDos : Especialista = new Especialista();;
  admin : Administrador = new Administrador();


  constructor(private usuariosSvc : UsuarioFireService,private afAuth : AngularFireAuth,private authSvc : AuthService, private router : Router,private spinner: NgxSpinnerService)
  {
    this.pacientes$ = this.usuariosSvc.obtenerTodos('pacientes').valueChanges();
    this.especialistas$ = this.usuariosSvc.obtenerTodos('especialistas').valueChanges();
    this.administradores$ = this.usuariosSvc.obtenerTodos('administradores').valueChanges();
  
  }


 


  async login()
  {
  

    try{
      
        this.authSvc.SignIn(this.email,this.password).then((res)=>{
          this.mostrarSpinner(1000);
          
      });
    }
    catch(error)
    {
      console.log(error);
    }
  }

 
  accesoRapido(email:string, password:string)
  {
    this.email = email;
    this.password = password;
  }


  mostrarSpinner(seg:number)
  {
    this.spinner.show();

    setTimeout(()=>{
      this.spinner.hide();
    },seg);
  }

  ngOnInit(): void {
    this.mostrarSpinner(1000);
    
     
   
  }

  

}
