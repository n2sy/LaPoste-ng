import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css'],
})
export class ReactFormComponent implements OnInit {
  loginForm: FormGroup;
  forbiddenPassword = ['kais', 'mansour'];
  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      credentials: new FormGroup({
        login: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl('azerty', [
          Validators.required,
          this.forbiddenPwd.bind(this),
        ]),
      }),
      adresse: new FormControl(null),
      telephone: new FormControl(null),
    });
  }

  showForm() {
    console.log(this.loginForm);
  }

  forbiddenPwd(Ctrl: FormControl) {
    if (this.forbiddenPassword.indexOf(Ctrl.value) != -1) {
      return { forbidden: true };
    }
    return null;
  }
}
