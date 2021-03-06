import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ListPersonsService } from '../services/list-persons.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  pers;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private listPers: ListPersonsService
  ) {}

  ngOnInit(): void {
    // V1 avec params
    // this.activatedRoute.params.subscribe((p: Params) => {
    //   console.log(p['id']);
    // });

    // V2 avec paramMap
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      this.listPers.getPersonByIdAPI(p.get('id')).subscribe(
        (response) => {
          this.pers = response;
        },
        (error) => {
          console.log(error);
        }
      );
    });

    // V3 avec snapshot
    // let id = this.activatedRoute.snapshot.params['id'];
    // this.pers = this.listPers.getPersonById(id);
  }

  deletePerson() {
    if (confirm('Etes-vous sur de vouloir supprimer cette personne ?')) {
      this.listPers.deletePersonneAPI(this.pers['_id']).subscribe(
        (response) => {
          console.log(response);
          this.router.navigateByUrl('/cv');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  goToUpdate() {
    this.router.navigate(['/cv', 'edit', this.pers._id]);
  }
}
