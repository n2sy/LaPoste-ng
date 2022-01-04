import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css'],
})
export class MsWordComponent implements OnInit {
  bgColor;
  textColor;
  fontsize;
  fontf;
  constructor() {}

  ngOnInit(): void {}

  changeSize(newSize) {
    console.log(newSize);

    this.fontsize = `${newSize}px`;
  }
}
