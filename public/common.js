(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "1Qa6":
/*!***********************************!*\
  !*** ./src/app/clases/usuario.ts ***!
  \***********************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
class Usuario {
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


/***/ }),

/***/ "HHh2":
/*!************************************!*\
  !*** ./src/app/clases/paciente.ts ***!
  \************************************/
/*! exports provided: Paciente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paciente", function() { return Paciente; });
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario */ "1Qa6");

class Paciente extends _usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"] {
}


/***/ }),

/***/ "IkfC":
/*!****************************************!*\
  !*** ./src/app/clases/especialidad.ts ***!
  \****************************************/
/*! exports provided: Especialidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Especialidad", function() { return Especialidad; });
class Especialidad {
}


/***/ }),

/***/ "QrTK":
/*!****************************************!*\
  !*** ./src/app/clases/especialista.ts ***!
  \****************************************/
/*! exports provided: Especialista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Especialista", function() { return Especialista; });
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario */ "1Qa6");

class Especialista extends _usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"] {
    constructor() {
        super(...arguments);
        this.especialidad = [];
    }
}


/***/ }),

/***/ "m7qI":
/*!*****************************************!*\
  !*** ./src/app/clases/administrador.ts ***!
  \*****************************************/
/*! exports provided: Administrador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Administrador", function() { return Administrador; });
/* harmony import */ var _usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuario */ "1Qa6");

class Administrador extends _usuario__WEBPACK_IMPORTED_MODULE_0__["Usuario"] {
}


/***/ })

}]);
//# sourceMappingURL=common.js.map