import { Component, OnInit } from '@angular/core';
import { Personne } from '../Models/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPerson;
  tabPersonnes = [
    new Personne(1, 'jelassi', 'Nidhal', 38, 'Enseignant', 'nidhal.jpg'),
    new Personne(2, 'simpson', 'Bart', 18, 'Eleve', 'bart.jpeg'),
    new Personne(3, 'simpson', 'Homer', 58, 'Plombier', 'homer.jpg'),
  ];
  constructor() {}

  ngOnInit(): void {}

  traitementDuCV(msg) {
    this.selectedPerson = msg;
  }
}
