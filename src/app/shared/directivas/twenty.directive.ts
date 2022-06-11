import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTwenty]'
})
export class TwentyDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.fontSize='20';
  }


}
