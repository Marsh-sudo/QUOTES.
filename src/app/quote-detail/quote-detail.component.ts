import { Component, OnInit ,Output,EventEmitter,Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() x:Quotes
  @Output() Delete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.Delete.emit(complete);
  }

  upvote(){
    this.x.like +=1;
  }

  downvote(){
    this.x.dislike +=1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
