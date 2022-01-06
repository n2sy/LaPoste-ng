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
    p.id = this.tabPersonnes[this.tabPersonnes.length - 1].id + 1;
    this.tabPersonnes.push(p);
  }

  getPersonById(id) {
    return this.tabPersonnes.find((p) => p.id == id);
  }

  deletePersonne(p) {
    let i = this.tabPersonnes.indexOf(p);
    this.tabPersonnes.splice(i, 1);
  }

  updatePersonne(p) {
    let i = this.tabPersonnes.indexOf(p);
    this.tabPersonnes[i] = p;
  }
}
