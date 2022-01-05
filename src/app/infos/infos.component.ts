import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((p: Params) => {
    //   console.log(p['id']);
    // });
    this.activatedRoute.paramMap.subscribe((p: ParamMap) => {
      console.log(p.get('id'));
    });
  }
}
