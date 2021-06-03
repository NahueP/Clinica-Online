import { Component, OnInit } from '@angular/core';
import { UsuarioFireService } from '../../../services/usuario-fire.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Especialidad } from 'src/app/clases/especialidad';
import { Paciente } from 'src/app/clases/paciente';
import { Administrador } from './../../../clases/administrador';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Especialista } from 'src/app/clases/especialista';
import { NgxSpinnerService} from 'ngx-spinner';
import firebase from 'firebase/app';
import { AlertService } from 'src/app/services/alert.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.scss']
})
export class AltasComponent implements OnInit {

  flag: boolean = false;
  paciente : Paciente = new Paciente();
  especialidades : Especialidad = new Especialidad();
  admin : Administrador = new Administrador();
  especialista: Especialista = new Especialista();
  especialidadFlag : boolean = false;


  ocultarBtn : boolean = false;
  listaEspecialidad = [];
  especialidadSeleccionada : string;

  spinnerFlag:boolean = true;
  tipo:string = 'Seleccione tipo de alta';

  public foto1: any;
  public foto2: any;
  public fotoCargada1: any;
  public fotoCargada2: any;
 


  public formEspecialista!: FormGroup;
  public formPaciente! : FormGroup;
  public formAdministrador! : FormGroup;

  especialidadesFire$: Observable<Especialidad[]>;

  constructor(private authSvc : AuthService,private router: Router,private fireSvc: UsuarioFireService,private fb:FormBuilder,private storage: AngularFireStorage, private spinner : NgxSpinnerService, private alerts : AlertService) 
  {
      this.especialidadesFire$ = this.fireSvc.obtenerTodos('especialidades').valueChanges();
      
      
  }

  
 
  

   ngOnInit(): void {


    this.formPaciente = this.fb.group(
      {
      'nombre': ['',[Validators.required]],
      'apellido': ['',Validators.required],
      'edad': ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'dni': ['',[Validators.required,Validators.min(11111111),Validators.max(99999999)]],
      'obraSocial': ['', Validators.required],
      'email': ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['',[Validators.required, Validators.minLength(6)]],
      'fotoPerfilUno': ['',Validators.required],
      'fotoPerfilDos': ['',Validators.required],

      }
    )

    this.formEspecialista = this.fb.group({
      'nombre': ['',[Validators.required]],
      'apellido': ['',Validators.required],
      'edad': ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'dni': ['',[Validators.required,Validators.min(11111111),Validators.max(99999999)]],
      'email': ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['',[Validators.required,Validators.minLength(6)]],
      'fotoPerfilUno': ['',Validators.required],
      'especialidad': ['', Validators.required],
      'especialidadInput': [''],
    
    });

    this.formAdministrador = this.fb.group({
      'nombre': ['',[Validators.required]],
      'apellido': ['',Validators.required],
      'edad': ['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'dni': ['',[Validators.required,Validators.min(11111111),Validators.max(99999999)]],
      'email': ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['',[Validators.required,Validators.minLength(6)]],
      'fotoPerfilUno': ['',Validators.required],
     
    });
  }

  


  
  async register()
  {
    
    if(this.tipo == "paciente")
    {
      this.paciente.nombre = this.formPaciente.get('nombre').value;
      this.paciente.apellido = this.formPaciente.get('apellido').value;
      this.paciente.edad = this.formPaciente.get('edad').value;
      this.paciente.dni = this.formPaciente.get('dni').value;
      this.paciente.email = this.formPaciente.get('email').value;
      this.paciente.password = this.formPaciente.get('password').value;
      this.paciente.obraSocial = this.formPaciente.get('obraSocial').value;      
      
      this.paciente.esAdmin = false;

      try
      {
          this.authSvc.Register(this.paciente.email,this.paciente.password, this.paciente.nombre).then(response=>{
           
          this.mostrarSpinner(1500);  
          this.paciente.uid = response.user.uid;
          let id = response.user.email;
               
          if(this.foto1 && this.foto2)
          {
            const filePath = `/pacientes/${id}/perfil1.png`;
            const ref = this.storage.ref(filePath);
            const taks = this.storage.upload(filePath, this.foto1).then(()=>{

             const filePath2 = `/pacientes/${id}/perfil2.png`;
              const ref2 = this.storage.ref(filePath2);

              const taks2 = this.storage.upload(filePath2, this.foto2).then(()=>{

                 let storages = firebase.storage();
                 let storageRef = storages.ref();
                 let spaceRef = storageRef.child(filePath);

                 let storages2 = firebase.storage();
                 let storageRef2 = storages2.ref();
                 let spaceRef2 = storageRef2.child(filePath2);

                 spaceRef.getDownloadURL().then(url=>{
                   this.fotoCargada1 = url;
                   this.fotoCargada1 = `${this.fotoCargada1}`;

                   console.log(this.fotoCargada1)


                   spaceRef2.getDownloadURL().then((url) => {
                   this.fotoCargada2 = url;
                   this.fotoCargada2 = `${this.fotoCargada2}`;

                   console.log(this.fotoCargada2);

                   this.paciente.fotoPerfilUno = this.fotoCargada1;
                   this.paciente.fotoPerfilDos = this.fotoCargada2;
                   this.fireSvc.crearUsuario('pacientes',JSON.parse(JSON.stringify(this.paciente)));

                   this.authSvc.sendEmailVerification();
                   this.alerts.mostraAlertaSimple('Se ha registrado exitosamente!','Cuenta Registrada','success');
                   this.formPaciente.reset();
                   
                 });
                 });
               });
            });
            
          }
        });
        
       
      }
       catch(error)
       {
         console.log(error);
        
       }
      

    }
    else
    {
      if(this.tipo == "especialista")
      {
        this.especialista.nombre = this.formEspecialista.get('nombre').value;
        this.especialista.apellido = this.formEspecialista.get('apellido').value;
        this.especialista.edad = this.formEspecialista.get('edad').value;
        this.especialista.dni = this.formEspecialista.get('dni').value;
        this.especialista.email = this.formEspecialista.get('email').value;
        this.especialista.password = this.formEspecialista.get('password').value;
        this.especialista.fotoPerfil = this.formEspecialista.get('fotoPerfilUno').value;
        this.especialista.especialidad = this.formEspecialista.get('especialidad').value;
        this.especialista.aprobado = true; // aprobado directamente porque lo registra un admin.
        this.especialista.esAdmin = false;

         try
         {
          this.authSvc.Register(this.especialista.email,this.especialista.password,this.especialista.nombre).then(response=>{
           
            this.mostrarSpinner(1500);  
            this.especialista.uid = response.user.uid;
            let id = response.user.email;
                 
            if(this.foto1)
            {
              const filePath = `/especialistas/${id}/perfil.png`;
              const ref = this.storage.ref(filePath);
              const taks = this.storage.upload(filePath, this.foto1).then(()=>{
  
                let storages = firebase.storage();
                let storageRef = storages.ref();
                let spaceRef = storageRef.child(filePath);

                spaceRef.getDownloadURL().then(url=>{
                  this.fotoCargada1 = url;
                  this.fotoCargada1 = `${this.fotoCargada1}`;

                  console.log(this.fotoCargada1);

                  this.especialista.fotoPerfil = this.fotoCargada1;
                
                   this.fireSvc.crearUsuario('especialistas',JSON.parse(JSON.stringify(this.especialista)));

                   this.authSvc.sendEmailVerification();
                   this.alerts.mostraAlertaSimple('Se ha registrado exitosamente!','Cuenta Registrada','success');
                   this.formEspecialista.reset();

                });
      
              });
              
            }
          });

         }
         catch(error)
         {
           console.log(error);
          
         }

      }
      else
      {
        if(this.tipo == "administrador")
        {
          this.admin.nombre = this.formAdministrador.get('nombre').value;
          this.admin.apellido = this.formAdministrador.get('apellido').value;
          this.admin.edad = this.formAdministrador.get('edad').value;
          this.admin.dni = this.formAdministrador.get('dni').value;
          this.admin.email = this.formAdministrador.get('email').value;
          this.admin.password = this.formAdministrador.get('password').value;
          this.admin.fotoPerfil = this.formAdministrador.get('fotoPerfilUno').value;
          this.admin.esAdmin = true;

          try
         {
          this.authSvc.Register(this.admin.email,this.admin.password,this.admin.nombre).then(response=>{
           
            this.mostrarSpinner(1500);  
            this.admin.uid = response.user.uid;
            let id = response.user.email;
                 
            if(this.foto1)
            {
              const filePath = `/administradores/${id}/perfil.png`;
              const ref = this.storage.ref(filePath);
              const taks = this.storage.upload(filePath, this.foto1).then(()=>{
  
                let storages = firebase.storage();
                let storageRef = storages.ref();
                let spaceRef = storageRef.child(filePath);

                spaceRef.getDownloadURL().then(url=>{
                  this.fotoCargada1 = url;
                  this.fotoCargada1 = `${this.fotoCargada1}`;

                  console.log(this.fotoCargada1);

                  this.admin.fotoPerfil = this.fotoCargada1;
                
                   this.fireSvc.crearUsuario('administradores',JSON.parse(JSON.stringify(this.admin)));

                   this.alerts.mostraAlertaSimple('Se ha registrado exitosamente!','Cuenta Registrada','success');
                   this.formAdministrador.reset();

                });
      
              });
              
            }
          });

         }
         catch(error)
         {
           console.log(error);
          
         }


        }
      }
    }
  
  }


  
  

  agregarEspecialidad(){
    let espAux = new Especialidad();
    let minus : string = this.formEspecialista.get('especialidadInput').value;
    let nombre : string;
    
    nombre = minus.toLowerCase();
    espAux.nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    let existe : boolean = true;
    
    

    this.especialidadesFire$.subscribe(esp=>{
      esp.forEach((especialidad):any =>{

        if(existe)
        {
         if(especialidad.nombre == espAux.nombre)
         { 
          existe = false;
         }
        }
      
      })

      if(existe != false)
      {
        this.fireSvc.crearUsuario('especialidades',JSON.parse(JSON.stringify(espAux)));
        console.log("Especialidad Agregada");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Especialidad agregada!',
          showConfirmButton: false,
          timer: 1000
        })
        this.formEspecialista.get('especialidadInput').reset();
        
      }
    })
  
    
  }
  
 
  mostrarAgregarEspecialidad()
  {
    this.especialidadFlag = true;
  }


   cambiarTipo(tipo : string)
   {
     if(tipo == 'paciente' )
     {
       this.tipo = 'paciente';
       this.ocultarBtn = true;
       this.formEspecialista.reset();
     }
     else
     {
       if(tipo=='especialista')
       {
         this.tipo = 'especialista';
         this.ocultarBtn = true;
         this.formPaciente.reset();
       }
       else
       {
         if(tipo == 'administrador')
         {
           this.tipo = 'administrador';
           this.formPaciente.reset();
           this.formEspecialista.reset();
           this.ocultarBtn = true;
         }
         else
         {
           if(tipo == 'ninguno')
          {
            this.tipo="ninguno";
            this.formPaciente.reset();
            this.formEspecialista.reset();
            // this.formAdministrador.reset();
            this.ocultarBtn = false;
         }
        }
         
       }
     }

     
   }


  
 
  onUploadEspecialista($event) {
    console.log($event)
    this.foto1 = $event.target.files[0];


  }

  onUploadAdmin($event) {
    console.log($event)
    this.foto1 = $event.target.files[0];

  }

  onUploadPaciente($event, num: number) {

    if (num == 1) {
      console.log($event)
      this.foto1 = $event.target.files[0];
    }

    else if (num == 2) {
      console.log($event)
      this.foto2 = $event.target.files[0];
    }
  }

  mostrarSpinner(seg : number)
  {
    this.spinner.show();

    setTimeout(()=>{
      this.spinner.hide();
    },seg);
  }
  
  

}


