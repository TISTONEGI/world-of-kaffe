import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appToggleStyle]',
})
export class ToggleStyleDirective {
  @Input('appToggleStyle') condition: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.condition) {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal');
    }
  }
}
