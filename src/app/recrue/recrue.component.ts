import { Component, OnInit } from '@angular/core';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-recrue',
  templateUrl: './recrue.component.html',
  styleUrls: ['./recrue.component.css'],
})
export class RecrueComponent implements OnInit {
  tabRecrues = [];
  constructor(private listRec: ListRecruesService) {}

  ngOnInit(): void {
    this.tabRecrues = this.listRec.tabRecrues;
  }
}
