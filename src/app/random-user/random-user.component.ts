import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {
  user1: any;
user2: any;
user3: any;
  error: string | undefined;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    
    this.getRandomUser().then(data => {
      this.user1 = data;
      this.getRandomUser().then(data => {
        this.user2 = data;
        this.getRandomUser().then(data => {
          this.user3 = data;
        });
      });
    });
  }

  async getRandomUser() {
    return await this.http.get('https://random-data-api.com/api/users/random_user')
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.error = error.message;
          return throwError(error);
        })
      )
      .toPromise();
  }
  }

