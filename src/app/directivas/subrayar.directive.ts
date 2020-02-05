import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSubrayar]'
})
export class SubrayarDirective {

  @Input() appSubrayar:string;
  colorSeleccionado:string;
  constructor(private element: ElementRef) {
    this.colorSeleccionado='blue';
  }

  @HostListener('mouseenter')
  publiconMouseEnter(){
    console.trace('HelloDirective publiconMouseEnter');
    this.element.nativeElement.style.textDecoration = 'underline';
    if(this.appSubrayar!=null){
      this.element.nativeElement.style.textDecorationColor=this.appSubrayar;
    }else{
      this.element.nativeElement.style.textDecorationColor=this.colorSeleccionado;
    }
  }// publiconMouseEnter

  @HostListener('mouseleave')
  publiconMouseLeave(){
    console.trace('HelloDirective publiconMouseLeave');
    this.element.nativeElement.style.textDecoration = '';

  }// publiconMouseLeave
}
