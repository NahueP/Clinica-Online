import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Especialista } from 'src/app/clases/especialista';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsuarioFireService } from 'src/app/services/usuario-fire.service';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.component.html',
  styleUrls: ['./especialistas.component.scss']
})
export class EspecialistasComponent implements OnInit {

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
      
          console.log(esp.email);
          this.listadoId.push(esp);
        
          

       
      });
    });
  }

}
