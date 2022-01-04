import { Injectable } from '@angular/core';
import { Personne } from '../Models/personne';

@Injectable({
  providedIn: 'root',
})
export class ListPersonsService {
  private tabPersonnes = [
    new Personne(1, 'jelassi', 'Nidhal', 38, 'Enseignant', 'nidhal.jpg'),
    new Personne(2, 'simpson', 'Bart', 18, 'Eleve', 'bart.jpeg'),
    new Personne(3, 'simpson', 'Homer', 58, 'Plombier', 'homer.jpg'),
  ];

  getAllPersons() {
    return this.tabPersonnes;
  }
  constructor() {}

  addPerson(p) {
    this.tabPersonnes.push(p);
  }
}
