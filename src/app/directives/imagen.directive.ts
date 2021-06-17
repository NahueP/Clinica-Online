import { Directive, ElementRef, HostListener  } from '@angular/core';


@Directive({
  selector: '[appImagen]'
})
export class ImagenDirective {

  constructor(private element: ElementRef) 
  { 
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.agrandar(250,250);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.agrandar(80,80);
  }
  
  private agrandar(x:number , y :number) {
    this.element.nativeElement.width = x;
    this.element.nativeElement.height = y;
  
  }

}
