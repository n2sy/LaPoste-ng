import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../Models/personne';

@Injectable({
  providedIn: 'root',
})
export class ListPersonsService {
  link = 'http://localhost:3000/cv/persons';
  private tabPersonnes = [
    // new Personne(1, 'jelassi', 'Nidhal', 38, 'Enseignant', 'nidhal.jpg'),
    // new Personne(2, 'simpson', 'Bart', 18, 'Eleve', 'bart.jpeg'),
    // new Personne(3, 'simpson', 'Homer', 58, 'Plombier', 'homer.jpg'),
  ];
  constructor(private http: HttpClient) {}
  getAllPersons() {
    return this.tabPersonnes;
  }
  getAllPersonsAPI() {
    return this.http.get(this.link);
  }

  addPerson(p) {
    p.id = this.tabPersonnes[this.tabPersonnes.length - 1].id + 1;
    this.tabPersonnes.push(p);
  }

  addPersonAPI(p) {
    // V1 avec HttpParams
    // let token = localStorage.getItem('access_token');
    // if (token) {
    //   let params = new HttpParams().set('token', token);
    //   //return this.http.post(this.link, p, {params : p1});
    //   return this.http.post(this.link, p, {params});
    // }

    // return this.http.post(this.link, p);

    // V2 avec HttpHeaders
    // let token = localStorage.getItem('access_token');
    // if (token) {
    //   let h = new HttpHeaders().set('Authorization', `bearer ${token}`);
    //   return this.http.post(this.link, p, { headers: h });
    // }

    // Avec interceptor
    return this.http.post(this.link, p);
  }

  getPersonById(id) {
    return this.tabPersonnes.find((p) => p.id == id);
  }

  getPersonByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  deletePersonne(p) {
    let i = this.tabPersonnes.indexOf(p);
    this.tabPersonnes.splice(i, 1);
  }

  deletePersonneAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  updatePersonne(p) {
    let i = this.tabPersonnes.indexOf(p);
    this.tabPersonnes[i] = p;
  }

  updatePersonneAPI(p) {
    return this.http.put(`${this.link}/${p._id}`, p);
  }
}
