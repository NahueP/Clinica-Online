(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nahue\Tp-ClinicaOnline\src\main.ts */"zUnb");


/***/ }),

/***/ "3LUQ":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AlertService {
    constructor() {
        this.reenvioEmail = false;
    }
    mostrarAlertaConfirmacionEmail(mensaje, titulo, mensajeConfirmed) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: titulo,
                text: mensaje,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Reenviar email de verificación'
            });
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Enviado!', mensajeConfirmed, 'success');
                this.reenvioEmail = true;
            }
            else {
                this.reenvioEmail = false;
            }
            return result;
        });
    }
    mostraAlertaSimple(mensaje, titulo, icono) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            icon: icono,
            title: titulo,
            text: mensaje,
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBmoFDLXZ96OJedjV7epPm-3qbLhZc6mGE",
        authDomain: "tp-clinicaonline.firebaseapp.com",
        projectId: "tp-clinicaonline",
        storageBucket: "tp-clinicaonline.appspot.com",
        messagingSenderId: "473878406664",
        appId: "1:473878406664:web:0d3585980f5d8a906213bd",
        measurementId: "G-HXV0LWW47D"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CBpB":
/*!**********************************************************!*\
  !*** ./src/app/pages/bienvenida/bienvenida.component.ts ***!
  \**********************************************************/
/*! exports provided: BienvenidaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidaComponent", function() { return BienvenidaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/ingresar/login"]; };
const _c1 = function () { return ["/ingresar/register"]; };
class BienvenidaComponent {
    constructor() { }
    ngOnInit() {
    }
}
BienvenidaComponent.ɵfac = function BienvenidaComponent_Factory(t) { return new (t || BienvenidaComponent)(); };
BienvenidaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BienvenidaComponent, selectors: [["app-bienvenida"]], decls: 13, vars: 4, consts: [[2, "font-size", "x-large", "text-align", "center"], ["id", "btnLog", 1, "btn", "btn-success", 3, "routerLink"], ["id", "btnReg", 1, "btn", "btn-info", 3, "routerLink"]], template: function BienvenidaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CLINICA VIRTUAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bienvenido a la clinica virtual, por favor inicie sesi\u00F3n para ingresar al portal o registre una cuenta en caso de no tener una.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "INICIAR SESI\u00D3N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "REGISTRARSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  background: url('bnv-fondo.png') no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n@keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\nh1[_ngcontent-%COMP%] {\n  animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n  font-size: 100px;\n  color: white;\n  text-shadow: 3px 0 0 black;\n}\n\n@keyframes tracking-in-expand {\n  0% {\n    letter-spacing: -0.5em;\n    opacity: 0;\n  }\n  40% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\np[_ngcontent-%COMP%] {\n  animation: tracking-in-expand 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;\n  color: white;\n  text-shadow: 2px 0 0 black;\n}\n\n.btn[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 600px;\n  text-align: center;\n  line-height: 130px;\n  font-size: 60px;\n  margin: 50px;\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n#btnLog[_ngcontent-%COMP%] {\n  animation: slide-in-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n@keyframes slide-in-right {\n  0% {\n    transform: translateX(1000px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n\n#btnReg[_ngcontent-%COMP%] {\n  animation: slide-in-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiaWVudmVuaWRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBR3VHO0VBQThCO0lBQUcsc0JBQUE7SUFBcUIsVUFBQTtFQWUzSjtFQWZxSztJQUFJLFlBQUE7RUFrQnpLO0VBbEJvTDtJQUFLLFVBQUE7RUFxQnpMO0FBQ0Y7O0FBckJBO0VBQ21GLHlFQUFBO0VBQy9FLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBd0JKOztBQW5CdUc7RUFBOEI7SUFBRyxzQkFBQTtJQUFxQixVQUFBO0VBcUMzSjtFQXJDcUs7SUFBSSxZQUFBO0VBd0N6SztFQXhDb0w7SUFBSyxVQUFBO0VBMkN6TDtBQUNGOztBQTNDQTtFQUNtRix5RUFBQTtFQUMvRSxZQUFBO0VBQ0EsMEJBQUE7QUE4Q0o7O0FBMUNBO0VBR0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUEyQ0o7O0FBdkMwTDtFQUF5QjtJQUF5Qyw4QkFBQTtJQUE4QixVQUFBO0VBMER4UjtFQTFEa1M7SUFBcUMsd0JBQUE7SUFBd0IsVUFBQTtFQStEL1Y7QUFDRjs7QUE5REE7RUFDNEUsdUVBQUE7QUFpRTVFOztBQTdEeUw7RUFBMEI7SUFBd0MsNkJBQUE7SUFBNkIsVUFBQTtFQWdGdFI7RUFoRmdTO0lBQXFDLHdCQUFBO0lBQXdCLFVBQUE7RUFxRjdWO0FBQ0Y7O0FBckZBO0VBQzZFLHdFQUFBO0FBd0Y3RSIsImZpbGUiOiJiaWVudmVuaWRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZW5lcy9ibnYtZm9uZG8ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHJhY2tpbmctaW4tZXhwYW5kezAle2xldHRlci1zcGFjaW5nOi0uNWVtO29wYWNpdHk6MH00MCV7b3BhY2l0eTouNn0xMDAle29wYWNpdHk6MX19QGtleWZyYW1lcyB0cmFja2luZy1pbi1leHBhbmR7MCV7bGV0dGVyLXNwYWNpbmc6LS41ZW07b3BhY2l0eTowfTQwJXtvcGFjaXR5Oi42fTEwMCV7b3BhY2l0eToxfX1cclxuaDF7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjp0cmFja2luZy1pbi1leHBhbmQgMXMgY3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMS4wMDApIGJvdGg7YW5pbWF0aW9uOnRyYWNraW5nLWluLWV4cGFuZCAxcyBjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxLjAwMCkgYm90aDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogM3B4IDAgMCBibGFjaztcclxuXHJcbiAgICBcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHRyYWNraW5nLWluLWV4cGFuZHswJXtsZXR0ZXItc3BhY2luZzotLjVlbTtvcGFjaXR5OjB9NDAle29wYWNpdHk6LjZ9MTAwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgdHJhY2tpbmctaW4tZXhwYW5kezAle2xldHRlci1zcGFjaW5nOi0uNWVtO29wYWNpdHk6MH00MCV7b3BhY2l0eTouNn0xMDAle29wYWNpdHk6MX19XHJcbnB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjp0cmFja2luZy1pbi1leHBhbmQgMXMgY3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMS4wMDApIGJvdGg7YW5pbWF0aW9uOnRyYWNraW5nLWluLWV4cGFuZCAxcyBjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxLjAwMCkgYm90aDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMCAwIGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmJ0bntcclxuXHJcblxyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMzBweDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICAgIFxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tbGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0xMDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHNsaWRlLWluLWxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTAwMHB4KTtvcGFjaXR5OjB9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO29wYWNpdHk6MX19XHJcblxyXG4jYnRuTG9ne1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246c2xpZGUtaW4tbGVmdCAxLjVzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGg7YW5pbWF0aW9uOnNsaWRlLWluLWxlZnQgMS41cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoO1xyXG5cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLXJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHNsaWRlLWluLXJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTAwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgxMDAwcHgpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7b3BhY2l0eToxfX1cclxuI2J0blJlZ3tcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOnNsaWRlLWluLXJpZ2h0IDEuNXMgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgYm90aDthbmltYXRpb246c2xpZGUtaW4tcmlnaHQgMS41cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoO1xyXG59Il19 */"] });


/***/ }),

/***/ "DOXN":
/*!**************************************************!*\
  !*** ./src/app/services/usuario-fire.service.ts ***!
  \**************************************************/
/*! exports provided: UsuarioFireService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioFireService", function() { return UsuarioFireService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");



class UsuarioFireService {
    constructor(db, storage) {
        this.db = db;
        this.storage = storage;
    }
    crearUsuario(collection, data) {
        return this.db.collection(collection).add(data);
    }
    obtenerPorId(coleccion, id) {
        return this.db.collection(coleccion).doc(id).snapshotChanges();
    }
    obtenerTodos(collection) {
        return this.db.collection(collection);
    }
    actualizar(collection, data, id) {
        return this.db.collection(collection).doc(id).set(data);
    }
    BuscarUsuario(collection, usuario) {
        return this.db.collection(collection, ref => ref.where("email", "==", usuario.email).where("password", "==", usuario.password));
    }
    addFile(nombreArchivo, datos) {
        return this.storage.upload('fotosPerfil/' + nombreArchivo, datos);
    }
    referenciaCloudStorage(nombreArchivo) {
        return this.storage.ref('fotosPerfil/' + nombreArchivo);
    }
    getAllFiles() {
        let retorno = this.storage.ref('fotosPerfil/').listAll();
        return retorno;
    }
}
UsuarioFireService.ɵfac = function UsuarioFireService_Factory(t) { return new (t || UsuarioFireService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"])); };
UsuarioFireService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioFireService, factory: UsuarioFireService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'Tp-ClinicaOnline';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authSvc.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(authState => !!authState)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(auth => {
            if (!auth) {
                this.router.navigate(['/error']);
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _pages_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/bienvenida/bienvenida.component */ "CBpB");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/error/error.component */ "y+ua");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_8__["BienvenidaComponent"],
        _pages_error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert.service */ "3LUQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _usuario_fire_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario-fire.service */ "DOXN");







class AuthService {
    constructor(afAuth, authSvc, alertas, router, usuarioSvc) {
        this.afAuth = afAuth;
        this.authSvc = authSvc;
        this.alertas = alertas;
        this.router = router;
        this.usuarioSvc = usuarioSvc;
        this.especialistas = [];
        this.logueado = false;
    }
    sendEmailVerification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield (yield this.afAuth.currentUser).sendEmailVerification();
        });
    }
    // verificarSiAdminAprobo(especialista : Especialista){
    //   let retorno = false;
    //   this.especialistas.forEach(user => {
    //     if( especialista.email = user.email){
    //       if( especialista.aprobado == false){
    //         retorno = false;
    //       }
    //       else{
    //         retorno = true;
    //       }
    //     }
    //   });
    //   return retorno;
    // }
    verificarAprobacion(result, user) {
    }
    SignIn(email, password) {
        return new Promise((resolve, rejected) => {
            this.afAuth.signInWithEmailAndPassword(email, password).then(response => {
                if (response && response.user.emailVerified || (response.user.email == "admin@test.com" || response.user.email == "paciente@test.com" || response.user.email == "especialista@test.com")) {
                    this.router.navigateByUrl('/home');
                }
                else {
                    this.alertas.mostrarAlertaConfirmacionEmail('Por favor verifique su correo para ingresar', 'Correo no verificado', 'Se ha reenviado la verificacion de correo');
                    if (this.alertas.reenvioEmail == true) {
                        this.sendEmailVerification();
                    }
                }
                resolve(response);
            }, (error) => {
                console.log(error);
                switch (error.code) {
                    case "auth/user-not-found":
                        rejected("El usuario no existe");
                        this.alertas.mostraAlertaSimple("El usuario no existe!", "Error!", 'question');
                        break;
                    case "auth/invalid-email":
                        rejected("email invalido");
                        this.alertas.mostraAlertaSimple("Correo invalido, intente nuevamente", "Error!", 'error');
                        break;
                    case "auth/wrong-password":
                        rejected("clave incorrecta");
                        this.alertas.mostraAlertaSimple("Contraseña incorrecta, intente nuevamente", "Error!", 'error');
                        break;
                    default:
                        rejected("ERROR");
                        break;
                }
            });
        });
    }
    desloguear() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLogged = null;
            yield this.afAuth.signOut();
        });
    }
    Register(email, password, displayName) {
        return new Promise((resolve, rejected) => {
            this.afAuth.createUserWithEmailAndPassword(email, password).then((response) => {
                response.user.updateProfile({ displayName: displayName });
                resolve(response);
            }, (error) => {
                switch (error.code) {
                    case "auth/invalid-email":
                        rejected("Corre invalido");
                        this.alertas.mostraAlertaSimple("Correo Invalido, intente nuevamente", 'Error!', 'error');
                        break;
                    case "auth/email-already-in-use":
                        rejected("Correo ya registrado");
                        this.alertas.mostraAlertaSimple("El correo ingresado ya se encuentra registrado", 'Lo sentimos', 'warning');
                        break;
                    default:
                        rejected("ERROR");
                        break;
                }
            });
        });
    }
    GetCurrentUser() {
        return this.afAuth.currentUser;
    }
    ChequearLogueado() {
        this.afAuth.authState.subscribe(res => {
            if (res && res.uid) {
                this.logueado = true;
            }
            else {
                this.logueado = false;
            }
        });
        return this.logueado;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_usuario_fire_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioFireService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _pages_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/bienvenida/bienvenida.component */ "CBpB");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/error/error.component */ "y+ua");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: 'bienvenida', component: _pages_bienvenida_bienvenida_component__WEBPACK_IMPORTED_MODULE_2__["BienvenidaComponent"] },
    { path: 'ingresar', loadChildren: () => Promise.all(/*! import() | pages-ingresar-ingresar-module */[__webpack_require__.e("default~pages-home-home-module~pages-ingresar-ingresar-module"), __webpack_require__.e("pages-ingresar-ingresar-module")]).then(__webpack_require__.bind(null, /*! ./pages/ingresar/ingresar.module */ "Em4V")).then(m => m.IngresarModule) },
    { path: 'home', loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("default~pages-home-home-module~pages-ingresar-ingresar-module"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomeModule), canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'error', component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] },
    {
        path: '',
        redirectTo: 'bienvenida',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "y+ua":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 2, vars: 0, template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map