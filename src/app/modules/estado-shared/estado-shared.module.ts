import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorEstadoDirective } from 'src/app/directives/color-estado.directive';



@NgModule({
  declarations: [
    ColorEstadoDirective
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    CommonModule,
    ColorEstadoDirective,
  ]
})
export class EstadoSharedModule { }
