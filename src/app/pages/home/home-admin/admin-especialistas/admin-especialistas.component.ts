import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Especialista } from 'src/app/clases/especialista';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';

@Component({
  selector: 'app-admin-especialistas',
  templateUrl: './admin-especialistas.component.html',
  styleUrls: ['./admin-especialistas.component.scss']
})
export class AdminEspecialistasComponent implements OnInit {



  user : any;
  listado: Especialista[];
  listadoId = [];

  constructor(public authSvc:AuthService, public router:Router, public db : AngularFirestore, public especialidadSvc : UsuarioFireService)
  {
    let collection = this.db.collection('especialistas', ref => { return ref.where('aprobado', '==', false)})
     let observable = collection.valueChanges()
     observable.subscribe((datos:Especialista[])=>this.listado = datos)
  }


  aprobar(especialista:Especialista){
    especialista.aprobado = true;
    // this.db.collection('especialistas').doc(especialista.email).update(especialista);

    this.listadoId.forEach(espe =>{

      if(espe.email == especialista.email)
      {
        this.especialidadSvc.actualizar('especialistas', especialista, espe.id);
      }
      
      
    });

          

    

  }


  ngOnInit(): void {
    this.especialidadSvc.obtenerTodos('especialistas').snapshotChanges().subscribe(espeSnap=>{
      espeSnap.forEach((response):any =>{
        let esp : any = response.payload.doc.data();
        esp.id = response.payload.doc.id;
      
        
          this.listadoId.push(esp);
        
        

       
      });
    });
  }

}
