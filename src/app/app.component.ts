import { Component } from '@angular/core';
import { Quote } from './models/quote.model';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'officeangularexample';

  quote: Quote;

  constructor(private quoteService: QuoteService) {}

  getQuote() {
    this.quoteService.getRandomQuote().subscribe(((res: any) => {
        this.quote = res.data;
    }))
  }
}
