import { Component, OnInit } from '@angular/core';
import { Personne } from '../Models/personne';
import { FirstService } from '../services/first.service';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPerson;
  tabPersonnes = [];
  constructor(private listPers: ListPersonsService) {}

  ngOnInit(): void {
    this.tabPersonnes = this.listPers.getAllPersons();
  }

  traitementDuCV(msg) {
    this.selectedPerson = msg;
  }

  // addNewPerson() {
  //   this.listPers.addPerson(
  //     new Personne(1, 'New', 'Person', 38, 'Enseignant', 'nidhal.jpg')
  //   );
  // }
}
