import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResaltarDirective } from 'src/app/directives/resaltar.directive';



@NgModule({
  declarations: [
    ResaltarDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    ResaltarDirective
  ]
})
export class ResaltarSharedModule { }
