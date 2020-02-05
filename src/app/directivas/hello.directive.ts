import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  @Input() appHello:string;
  constructor(private element: ElementRef) {
    console.trace('HelloDirective constructor');
  }// constructor

  @HostListener('mouseenter')
    publiconMouseEnter(){
      console.trace('HelloDirective publiconMouseEnter');
      this.element.nativeElement.style.backgroundColor = this.appHello;
    }// publiconMouseEnter
   
  @HostListener('mouseleave')
  publiconMouseLeave(){
    console.trace('HelloDirective publiconMouseLeave');
    this.element.nativeElement.style.backgroundColor = '';

  }// publiconMouseLeave

}// HelloDirective
