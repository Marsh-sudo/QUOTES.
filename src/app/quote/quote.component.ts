import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote!: Quote;

  quotes:Quotes[]=[
     new Quotes(1,'Success usually Comes to those who are busy looking for it','Mahtamah melly',new Date(2021,3,15),0,0),
     new Quotes (2,'I never dreamed about success.I worked for it','Estee Launder',new Date (2009,3,14),0,0),
     new Quotes (3,'Do not let yesterday take up too much of today','Will Rodgers',new Date(2012,3.4),0,0)
  ]
    
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote)

  }

  quoteDelete(Delete:any, index:number){
    if(Delete) {
      let toDelete: boolean = confirm(`Are you sure you want to delete this quote?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }



  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    interface ApiResponse{
      author:string
      quote:string
    }
    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      //successful apiResponse
      this.quote = new Quote(data.author, data.quote)
    })
  }

}
