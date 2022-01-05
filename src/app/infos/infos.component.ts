import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
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
    private listPers: ListPersonsService
  ) {}

  ngOnInit(): void {
    // V1 avec params
    // this.activatedRoute.params.subscribe((p: Params) => {
    //   console.log(p['id']);
    // });

    // V2 avec paramMap
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      this.pers = this.listPers.getPersonById(p.get('id'));
      console.log(p.get('id'));
    });

    // V3 avec snapshot
    // let id = this.activatedRoute.snapshot.params['id'];
    // this.pers = this.listPers.getPersonById(id);
  }
}
