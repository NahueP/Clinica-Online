import { Directive, Input, ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appColorEstado]'
})
export class ColorEstadoDirective implements AfterViewInit {

  constructor(private elementRef:ElementRef) { }


  color:string;

  @Input() set appColorEstado(status: string) {
     if(status == 'Aceptado')
       this.color = 'green'
     else if(status == 'Realizado')
       this.color = 'royalblue'
     else if(status == 'Cancelado' || status == 'Rechazado')
       this.color = 'red'
     else if(status == 'Pendiente')
       this.color = 'grey'
   }

   ngAfterViewInit(): void {
     this.elementRef.nativeElement.style.backgroundColor = this.color;
     this.elementRef.nativeElement.style.color = 'black';
     this.elementRef.nativeElement.style.textTransform = 'uppercase';
     this.elementRef.nativeElement.style.fontSize = '1em'
     this.elementRef.nativeElement.style.fontWeight = 700;
   }

}
