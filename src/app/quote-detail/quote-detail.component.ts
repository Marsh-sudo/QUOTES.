import { Component, OnInit ,Output,EventEmitter,Input } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() x:Quotes
  @Output() isDelete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isDelete.emit(complete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
