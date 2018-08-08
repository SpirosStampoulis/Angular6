import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// to add interval
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const Mynumbers = Observable.interval(1000);
    // Mynumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );
    // to create a btodge between observable and observer
    // next push the next data packages
    // Observer need to define what data
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      // setTimeout(() => {
      //   observer.error('this doesnot work');
      // }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 6000);
      setTimeout(() => {
        observer.next('third package');
      }, 7000);
    });
    // and now subscribe them
    myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
    );
  }

}
