import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor() {}

  afficherHello() {
    console.log('Je suis le second Service');
  }
}
