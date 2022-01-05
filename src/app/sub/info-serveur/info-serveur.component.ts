import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServeursService } from '../services/serveurs.service';

@Component({
  selector: 'app-info-serveur',
  templateUrl: './info-serveur.component.html',
  styleUrls: ['./info-serveur.component.css'],
})
export class InfoServeurComponent implements OnInit {
  isAllowed = false;
  myServ;
  constructor(
    private aR: ActivatedRoute,
    private router: Router,
    private serveurSer: ServeursService
  ) {}

  ngOnInit(): void {
    this.aR.paramMap.subscribe((p: ParamMap) => {
      this.myServ = this.serveurSer.getServeurById(p.get('id'));
    });

    this.aR.queryParamMap.subscribe((q: ParamMap) => {
      this.isAllowed = q.get('allowEdit') == '1' ? true : false;
    });
  }

  goToEdit() {
    this.router.navigate(['/serveurs', this.myServ.id, 'edit']);
  }
}
