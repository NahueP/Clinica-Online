import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenarPipe } from 'src/app/pipes/ordenar.pipe';



@NgModule({
  declarations: [
    OrdenarPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    OrdenarPipe
  ]
})
export class OrdenarSharedModule { }
