import { Injectable } from '@angular/core';
import { Personne } from '../Models/personne';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  tabRecrues: Personne[] = [];
  constructor() {}

  addNewRecrue(newRecrue: Personne) {
    if (this.tabRecrues.indexOf(newRecrue) == -1)
      this.tabRecrues.push(newRecrue);
    else alert('Cette personne a déjà été recruté !');
  }
}
