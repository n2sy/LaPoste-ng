import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Models/personne';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  providers: [ListPersonsService],
})
export class ListeComponent implements OnInit {
  //@Input() listPersonnes: Personne[];
  listPersonnes;
  @Output() msgToCv = new EventEmitter();
  constructor(private listServ: ListPersonsService) {}

  ngOnInit(): void {
    this.listPersonnes = this.listServ.getAllPersons();
  }

  sendMsgToCv(msg) {
    this.msgToCv.emit(msg);
  }
}
