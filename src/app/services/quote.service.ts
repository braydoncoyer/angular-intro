import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  endpoint = 'https://www.officeapi.dev/api/quotes/random';

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(`${this.endpoint}`);
  }
}
