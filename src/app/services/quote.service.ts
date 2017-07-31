import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class QuoteService {
  private _apiURL = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

  constructor(private _http: Http) { }

  getData(): Observable<any> {
    return this._http.get(this._apiURL).map(res => res.json());
  }
}
