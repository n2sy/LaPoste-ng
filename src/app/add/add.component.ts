import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private persServ: ListPersonsService, private router: Router) {}

  ngOnInit(): void {}

  addNewPerson(newP) {
    console.log(newP);
    this.persServ.addPerson(newP);
    this.router.navigateByUrl('/cv');
  }
}
