import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() colorFils: string;

  @Output() msgToParent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  send() {
    this.msgToParent.emit('Message de la part du fils');
  }
}
