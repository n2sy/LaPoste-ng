import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServeursService {
  private tabServeurs = [
    {
      id: 1,
      nom: 'Serveur de production',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Serveur de test',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Serveur de Mansour',
      statut: 'online',
    },
  ];

  constructor() {}

  getAllServeurs() {
    return this.tabServeurs;
  }

  getServeurById(id) {
    return this.tabServeurs.find((p) => p.id == id);
  }

  updateServeur(uServeur) {
    let i = this.tabServeurs.indexOf(uServeur);
    this.tabServeurs[i] = uServeur;
  }
}
