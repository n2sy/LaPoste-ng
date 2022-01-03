import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  nom: string = 'Adel';
  color = 'pink';
  hd = false;

  constructor() {}

  ngOnInit(): void {}

  showAlert() {
    alert("On m'a cliqué dessus");
  }

  traitementDuParent(msg) {
    alert(msg);
  }
}
