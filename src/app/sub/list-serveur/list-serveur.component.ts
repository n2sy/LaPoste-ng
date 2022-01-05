import { Component, OnInit } from '@angular/core';
import { ServeursService } from '../services/serveurs.service';

@Component({
  selector: 'app-list-serveur',
  templateUrl: './list-serveur.component.html',
  styleUrls: ['./list-serveur.component.css'],
})
export class ListServeurComponent implements OnInit {
  tab = [];
  constructor(private serveurSer: ServeursService) {}

  ngOnInit(): void {
    this.tab = this.serveurSer.getAllServeurs();
  }
}
