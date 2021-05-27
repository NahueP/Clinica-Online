import { Injectable } from '@angular/core';
import {Especialidad} from '../clases/especialidad';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../clases/usuario';
import { Paciente } from '../clases/paciente';
import { Especialista } from '../clases/especialista';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UsuarioFireService {

  
  constructor(public db : AngularFirestore, private storage : AngularFireStorage) {
   
  }

  public crearUsuario(collection: string, data: any) : any
  {    
     return this.db.collection(collection).add(data);
  }
  
  public obtenerPorId(coleccion:string,id:string) : any
  {
     return this.db.collection(coleccion).doc(id).snapshotChanges();
  }

  public obtenerTodos(collection : string) : AngularFirestoreCollection<any>
  {
    return this.db.collection(collection);
  }

  public actualizar(collection:string, data:any,id:string) : any
  {
     return this.db.collection(collection).doc(id).set(data);
  }

  public BuscarUsuario(collection:string,usuario: Usuario) : any
  {
    return this.db.collection(collection, ref => ref.where("email", "==", usuario.email).where("password", "==", usuario.password));
  }
  

  public addFile(nombreArchivo: string, datos: any) : any
  {
    return this.storage.upload('fotosPerfil/'+nombreArchivo, datos);
  }


  public referenciaCloudStorage(nombreArchivo: string)  : any
  {
    return this.storage.ref('fotosPerfil/' + nombreArchivo);
  }

  getAllFiles() : any
  {
    let retorno = this.storage.ref('fotosPerfil/').listAll();
    return retorno;
  }


}
