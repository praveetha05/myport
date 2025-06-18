import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private obj:ElementRef) { }

  @HostListener('mouseover') show(){
    this.obj.nativeElement.style.transform="scale(1.2)"
    
    this.obj.nativeElement.style.transition="1s"
    
  }
  @HostListener('mouseout') sh(){
    this.obj.nativeElement.style.transform='scale(1)'

  }

}
