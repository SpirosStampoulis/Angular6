import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './logging.service';
// this service now is injectable, use this when you want to get something injected
@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  // inject loggingService and also import it
  constructor(private loggingService: LoggingService) {}

  // get from account the name and the status
  addAccount(name: string, status: string) {
    // push to array accounts
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  // get the id of the account and the new status
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
