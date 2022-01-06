import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  pers;
  constructor(
    private activRoute: ActivatedRoute,
    private persSer: ListPersonsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activRoute.paramMap.subscribe((p) => {
      this.pers = this.persSer.getPersonById(p.get('id'));
    });
  }

  updatePers() {
    this.persSer.updatePersonne(this.pers);
    this.router.navigateByUrl('/cv');
  }
}
