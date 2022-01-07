import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  entreprises = ['', 'La Poste', 'Ooredoo', 'Orange', 'TT'];

  defaultEntreprise = 'TT';

  myComment = 'Rien à signaler...';

  erreur = false;
  constructor(private loginSer: LoginService, private router: Router) {}

  ngOnInit(): void {}

  seConnecter(credentials) {
    console.log(credentials.value);

    this.loginSer.seConnecter(credentials.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('access_token', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (error) => {
        console.log(error);
        this.erreur = true;
        credentials.reset();
      },
    });
  }

  showForm(f) {
    console.log(f.value);
  }

  effacerForm(f) {
    f.reset();
  }

  generatePwd(f) {
    f.setValue({
      commentaire: '',
      infos: {
        login: '',
        password: '123456',
      },
      operateur: '',
    });
  }

  generatePwdII(f) {
    f.form.patchValue({
      infos: {
        password: '123456',
      },
    });
  }
}
