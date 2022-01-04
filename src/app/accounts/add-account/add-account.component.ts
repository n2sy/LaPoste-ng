import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent implements OnInit {
  AllStatus = ['active', 'inactive', 'unknown'];

  @Output() msgToHome = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendAccountToHome(inp, sel) {
    console.log(inp.value);
    this.msgToHome.emit({
      name: inp.value,
      status: sel.value,
    });
  }
}
