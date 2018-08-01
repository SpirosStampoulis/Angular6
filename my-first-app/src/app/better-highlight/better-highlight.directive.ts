import {
    Directive,
    Renderer2,
    OnInit,
    ElementRef,
    HostListener,
    HostBinding,
    Input
  } from '@angular/core';

  @Directive({
    selector: '[appBetterHighlight]'
  })
  export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    // put alias same name with directive so we can change color like element
    @Input('appBetterHighlight') highlightColor: string = 'blue';

    // defining to which property of the hosting element we want to bind
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
      this.backgroundColor = this.defaultColor;
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }
    // hostlistener when mouse enter change color to blue
    @HostListener('mouseenter') mouseover(eventData: Event) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.backgroundColor = this.highlightColor;
    }
    // hostlistener when mouse leave change color to transparent
    @HostListener('mouseleave') mouseleave(eventData: Event) {
      // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
      this.backgroundColor = this.defaultColor;
    }

  }
