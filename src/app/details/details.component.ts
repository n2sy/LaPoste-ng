import { Component, OnInit, Input } from '@angular/core';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() PersonSelected;
  constructor(private recrueSer: ListRecruesService) {}

  ngOnInit(): void {}

  addRecrue() {
    this.recrueSer.addNewRecrue(this.PersonSelected);
    console.log(this.recrueSer.tabRecrues);
  }
}
