import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // to pass style to ither components none or emulated
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // Decorator so we can bind it outside of component alias:srvElement
  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
