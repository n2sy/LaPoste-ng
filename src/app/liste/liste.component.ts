import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() listPersonnes: Personne[];
  @Output() msgToCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendMsgToCv(msg) {
    this.msgToCv.emit(msg);
  }
}
