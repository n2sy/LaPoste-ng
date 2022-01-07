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
    this.activRoute.paramMap.subscribe(
      (p) => {
        this.persSer.getPersonByIdAPI(p.get('id')).subscribe(
          (response) => {
            this.pers = response;
          },
          (error) => {
            console.log('Erreur avec getPersonById');
          }
        );
      },
      (error) => {
        console.log('erreur avec paramMap');
      }
    );
  }

  updatePers() {
    this.persSer.updatePersonneAPI(this.pers).subscribe(
      (response) => {
        this.router.navigateByUrl('/cv');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
