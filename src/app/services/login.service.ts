import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  link = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) {}

  seConnecter(identifiants) {
    return this.http.post('http://localhost:3000/auth/login', identifiants);
  }

  isLogged() {
    let token = localStorage.getItem('access_token');
    if (token) {
      return true;
    }
    return false;
  }
}
