import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  wise:Quotes[] = [
    new Quotes(1,'Success usually comes to those who are busy looking for it','Mahtmah Melly',new Date(2021,3,15),0,0),
    new Quotes(2,'I never dreamed about success.I worked for it','Estee Lauder',new Date (2009,6,10),0,0),
    new Quotes(3,'Do not let yesterday take up too much of today','Will Rodgers',new Date(2010,4,6),0,0),
    new Quotes(4,'Goal setting is the secret to a compelling future','Tony Robbins',new Date(2013,11,5),0,0),
    new Quotes(5,'Either you run the day or the day runs you.','Thomas Jefferson',new Date (2006,7,10),0,0),
    new Quotes(6,'Setting goals is the first step in turning the invisible to visible','Tony Mark',new Date(2004,1,11),0,0),
    

  ]

   quoteDelete(Delete: any, index: number){
      if(Delete){
        let toDelete = confirm(`Are You sure you want to Delete this Quote`)
        if(toDelete){
          this.wise.splice(index,1)
        }
      }

   }

    toggleDetails(index: any){
      this.wise[index].showDescription = !this.wise[index].showDescription;
    }

  addNewQuote(quote:any){
    let quoteLength = this.wise.length;
    quote.id = quoteLength+1;
    this.wise.push(quote)
  }

   



  constructor() { }

  ngOnInit(): void {
  }

}
