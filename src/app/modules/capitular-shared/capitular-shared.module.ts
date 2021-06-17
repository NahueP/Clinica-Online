import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitularPipe } from 'src/app/pipes/capitular.pipe';



@NgModule({
  declarations: [
    CapitularPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    CapitularPipe
  ]
})
export class CapitularSharedModule { }
