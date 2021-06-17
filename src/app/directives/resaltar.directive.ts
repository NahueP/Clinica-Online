import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(private element: ElementRef) 
  { 
    
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('skyblue');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  
  }

}
