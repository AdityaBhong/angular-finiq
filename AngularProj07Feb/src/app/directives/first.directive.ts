import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '.appFirst'
})
export class FirstDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color="red";
   }

}
