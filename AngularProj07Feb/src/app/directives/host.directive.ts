import { Directive,ElementRef,Renderer,HostListener } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
      //this.ChangeBgColor("red");
   }

   @HostListener("mouseover") onMouseOver()
   {
    this.ChangeBgColor("red");
   }

   @HostListener("click") onClick()
   {
     window.alert('Host element Clicked.');
   }

   @HostListener('mouseleave') onMouseLeave()
   {
    this.ChangeBgColor("black");
   }

   ChangeBgColor(color:string)
   {
     this.renderer.setElementStyle(this.el.nativeElement,"color",color);
   }
}
