import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  // inject the active route
  constructor(public route: ActivatedRoute) { }

  // when the component get initialized
  ngOnInit() {
    this.user = {
    id: this.route.snapshot.params['id'],
    name: this.route.snapshot.params['name']
  };
 }
}
