import {Component, OnInit} from '@angular/core';
import {QuoteService} from '../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})

export class QuoteComponent implements OnInit {
  quote: string;
  errorMessage: string;

  constructor(private _quoteService: QuoteService) { }

  ngOnInit() {
    this.getQuote();
  }

  getQuote() {
    this._quoteService.getData().subscribe(
      quote => this.quote = quote.message,
      error => this.errorMessage = 'IT IS BROKEN'
    );

    return false;
  }
}

