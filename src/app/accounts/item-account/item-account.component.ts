import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-account',
  templateUrl: './item-account.component.html',
  styleUrls: ['./item-account.component.css'],
})
export class ItemAccountComponent implements OnInit {
  @Input() oneAccount;
  constructor() {}

  ngOnInit(): void {}

  changeStatus(newStatus) {
    this.oneAccount.status = newStatus;
  }
}
