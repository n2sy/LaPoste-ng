import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public loginSer: LoginService) {}

  ngOnInit(): void {}

  seDeconnecter() {
    localStorage.removeItem('access_token');
  }
}
