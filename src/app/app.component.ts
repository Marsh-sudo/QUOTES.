import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QUOTES.';

    wise:Quotes[] = [
      {name:'Success usually comes to those who are busy looking for it'},
      {name:'I never dreamed about success.I worked for it....Estee Lauder'},
      {name:'Do not let yesterday take up too much of today...Will Rodgers'},
      {name:'Goal setting is the secret to a compelling future. ...Tony Robbins'},
      {name:'Either you run the day or the day runs you. ...Thomas Jefferson'},
      {name:'Setting goals is the first step in turning the invisible to visible. ...Tony Robins'},
      

    ]

    addNewGoal(quote){
      let quoteLength = this.wise.length;
      quote.id = quoteLength+1;
      this.wise.push(quote)
    }

}

