import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() PersonSelected;
  constructor(private recrueSer: ListRecruesService, private router: Router) {}

  ngOnInit(): void {}

  addRecrue() {
    this.recrueSer.addNewRecrue(this.PersonSelected);
    console.log(this.recrueSer.tabRecrues);
  }

  goToInfos() {
    this.router.navigate(['cv', this.PersonSelected.id]);
  }
}
