import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private apiURL = 'https://api.whatdoestrumpthink.com/api/v1/quotes/';
  quote: string;
  errorMessage: string;
  min: number;
  max: number;

  constructor(private http: Http) {
    this.getQuote();
  }

  getQuote() {
    this.http.get(this.apiURL)
    .map(res => res.json())
    .subscribe(
      data => {
        this.quote = data.messages.non_personalized[this.getRandomNumber()];
      },
      error => {
        if (error.status !== 200) {
          this.errorMessage = 'IT IS BROKEN';
        }
      }
    );
    return false;
  }

  getRandomNumber() {
    this.min = 0;
    this.max = 47;
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
