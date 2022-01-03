import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() onePerson: Personne;
  @Output() msgToList = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  sendToListe() {
    this.msgToList.emit(this.onePerson);
  }
}
