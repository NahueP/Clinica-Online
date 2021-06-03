import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(public db : AngularFirestore) { }

  public crearTurno(collection: string, data: any) : any
  {    
     return this.db.collection(collection).add(data);
  }
  
  public obtenerPorId(coleccion:string,id:string) : any
  {
     return this.db.collection(coleccion).doc(id).snapshotChanges();
  }

  public obtenerTodosTurnos(collection : string) : AngularFirestoreCollection<any>
  {
    return this.db.collection(collection);
  }

  public actualizarTurnos(collection:string, data:any,id:string) : any
  {
     return this.db.collection(collection).doc(id).set(data);
  }

  public eliminarTurnos(collection:string, data:any,id:string) : any
  {
     return this.db.collection(collection).doc(id).delete();
  }

  


}
