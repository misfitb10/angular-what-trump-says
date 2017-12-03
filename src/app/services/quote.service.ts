import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class QuoteService {
  private _apiURL = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

  constructor(private _http: HttpClient) { }

  getData(): Observable<any> {
    return this._http.get(this._apiURL);
  }
}
