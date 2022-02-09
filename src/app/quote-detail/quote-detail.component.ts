import { Component, OnInit,Input , Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input()
  quote!: Quotes;
  @Output() Delete = new EventEmitter<boolean>();


  eleteQuote(read: boolean) {
    this.Delete.emit(read);
  }

  upvote() {
    this.quote.like +=1;
  }
  downvote() {
    this.quote.dislike +=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
