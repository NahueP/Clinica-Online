export class Usuario {
    uid: string;
    nombre: string;
    apellido: string;
    edad: number;
    dni: number;
    email: string;
    password: string;
    esAdmin: boolean;
}








// uid: string;
    // fecha: string;
    // especialista:boolean;
    // fotoPerfil:string;
    // fotoPerfilDos?:string;
    // descripcion:string[];
    // aprobadoPorAdmin?:boolean;
    // admin?:boolean;
    // paciente? : boolean;
    // password? : string;

    // constructor(){
    //     this.descripcion = [];
    //     this.email = "";
    //     this.uid = "";
    //     this.username = "";
        
    //     this.fecha = '';
    //     this.fotoPerfil = "";
    //     this.fotoPerfilDos = "";
    // }
    
    // obtenerFechaHora(){
    //     var fecha:Date = new Date();
    //     var segString: string = '';
    //     var minString : string = '';
    //     if(fecha.getSeconds().toString().length >= 2){
    //         segString = fecha.getSeconds().toString();
    //       }
    //     else{
    //         segString = "0"+ fecha.getSeconds().toString();
    //     }
    //     if(fecha.getMinutes().toString().length >=2){
    //         minString = fecha.getSeconds().toString();
    //     }
    //     else{
    //         minString = "0"+fecha.getMinutes().toString();
    //     }
    //     var fechaCompleta = (fecha.getMonth()+1)+ "-"+  fecha.getDate()  +  "-" + fecha.getFullYear();
        
    //     return fechaCompleta + "_" + fecha.getHours() + ":" + fecha.getMinutes()+ ":" +  segString;
    
    // }