import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrarPipe } from 'src/app/pipes/filtrar.pipe';



@NgModule({
  declarations: [
    FiltrarPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FiltrarPipe,
  ]
})
export class FiltrarSharedModule { }
