import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// to add interval
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const Mynumbers = Observable.interval(1000);
    Mynumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
  }

}
