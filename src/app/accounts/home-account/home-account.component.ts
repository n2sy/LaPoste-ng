import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css'],
})
export class HomeAccountComponent implements OnInit {
  tabAccounts = [
    {
      id: 1,
      name: 'Adel Account',
      status: 'active',
    },
    {
      id: 2,
      name: 'Mansour Account',
      status: 'inactive',
    },
    {
      id: 3,
      name: 'Kaouther Account',
      status: 'unknown',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  recupNewAccount(newAccount) {
    newAccount.id = this.tabAccounts[this.tabAccounts.length - 1].id + 1;
    this.tabAccounts.push(newAccount);
  }
}
