import { Component,
   OnInit,
   Input,
   ViewEncapsulation,
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // to pass style to other components none or emulated
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
 OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy {
  // Decorator so we can bind it outside of component alias:srvElement
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
  }
// lifecycle
  ngOnChanges(changes: SimpleChanges) {
      console.log('ngOnChanges called!');
      console.log(changes);
  }
// lifecycle
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  // lifecycle
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }

   // lifecycle
   ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

   // lifecycle
   ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

   // lifecycle
   ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

  // lifecycle
  ngOnInit() {
    console.log('ngOnInit called!');
  }

}
