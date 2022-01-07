import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-observable',
  templateUrl: './exp-observable.component.html',
  styleUrls: ['./exp-observable.component.css'],
})
export class ExpObservableComponent implements OnInit, OnDestroy {
  myObservable;
  subs: Subscription;
  constructor() {}

  ngOnInit(): void {
    // this.myObservable = new Observable((observer) => {
    //   setTimeout(() => {
    //     observer.next('first package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('second package');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.error('Kais au téléphone');
    //   }, 5000);
    //   setTimeout(() => {
    //     observer.next('third package');
    //   }, 6000);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 8000);
    //   setTimeout(() => {
    //     observer.next('thirs package');
    //   }, 10000);
    // });

    this.myObservable = new Observable((observer) => {
      let i = 0;

      setInterval(() => {
        observer.next(i);
        i++;
      }, 1000);
    });

    this.subs = this.myObservable.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Flux terminé !');
      },
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
