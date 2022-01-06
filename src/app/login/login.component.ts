import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  entreprises = ['', 'La Poste', 'Ooredoo', 'Orange', 'TT'];

  defaultEntreprise = 'TT';

  myComment = 'Rien à signaler...';
  constructor() {}

  ngOnInit(): void {}

  showForm(f) {
    console.log(f.value);
  }
}
