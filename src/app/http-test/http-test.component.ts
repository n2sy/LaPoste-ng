import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent implements OnInit {
  link = 'https://jsonplaceholder.typicode.com/users';
  subs: Subscription;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.subs = this.http.get(this.link).subscribe({
      next: (response) => console.log(response),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
      // });

      //   (response) => {
      //     console.log(response);
      //   },
      //   (error) => {
      //     console.log(error);
      //   },
      //   () => {
      //     console.log('Flux terminé');
      //   }
      // );
    });

    this.subs.unsubscribe();
  }
}
