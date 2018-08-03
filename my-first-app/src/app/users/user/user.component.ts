import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

// onDestroy when we use subscription to free meory when we change page
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  // its not working maybe because of the version of ang6 OnInit , OnDestroy
  // paramsSubscription: Subscription;
  // inject the active route
  constructor(public route: ActivatedRoute) { }

  // when the component get initialized
  ngOnInit() {
    this.user = {
    id: this.route.snapshot.params['id'],
    name: this.route.snapshot.params['name']
  };
  // params are observable and help us with asynchronus tasks
  // and subscribe can take 3 functions
  // and now when we click load change also the id and the name on html
  this.route.params
  .subscribe(
    (params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    }
  );
 }

// tslint:disable-next-line:use-life-cycle-interface
  // ngOnDestroy() {
  //    this.paramsSubscription.unsubscribe();
  // }
}
