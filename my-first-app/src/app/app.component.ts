import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // always need to you providers on services
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  // Define the array of the accounts
  accounts: {name: string, status: string}[] = [];

  // inject
  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    // with this way we het access to the accounts
    this.accounts = this.accountsService.accounts;
  }
}
