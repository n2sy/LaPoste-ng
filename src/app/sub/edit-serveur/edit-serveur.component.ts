import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ServeursService } from '../services/serveurs.service';

@Component({
  selector: 'app-edit-serveur',
  templateUrl: './edit-serveur.component.html',
  styleUrls: ['./edit-serveur.component.css'],
})
export class EditServeurComponent implements OnInit {
  servToEdit;
  constructor(
    private router: Router,
    private aR: ActivatedRoute,
    private serveurSer: ServeursService
  ) {}

  ngOnInit(): void {
    this.aR.paramMap.subscribe((p: ParamMap) => {
      this.servToEdit = this.serveurSer.getServeurById(p.get('id'));
    });
  }

  updateServ() {
    this.serveurSer.updateServeur(this.servToEdit);
    this.router.navigateByUrl('/serveurs');
  }
}
