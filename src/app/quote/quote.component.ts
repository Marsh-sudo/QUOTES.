import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  wise:Quotes[] = [
    new Quotes(1,'Success usually comes to those who are busy looking for it','Mahtmah Melly'),
    new Quotes(2,'I never dreamed about success.I worked for it','Estee Lauder'),
    new Quotes(3,'Do not let yesterday take up too much of today','Will Rodgers')
    new Quotes(4,'Goal setting is the secret to a compelling future','Tony Robbins'),
    new Quotes(5,'Either you run the day or the day runs you.','Thomas Jefferson'),
    new Quotes(6,'Setting goals is the first step in turning the invisible to visible','Tony Robins'),
    

  ]

   deleteQuote(Delete , index){
     if(Delete){
       this.wise.splice(index,1);
     }
   }

    toggleDetails(index){
      this.wise[index].showDescription = !this.wise[index].showDescription;
    }

  addNewGoal(wise){
    let quoteLength = this.wise.length;
    wise.id = quoteLength+1;
    this.wise.push(wise)
  }




  constructor() { }

  ngOnInit(): void {
  }

}
