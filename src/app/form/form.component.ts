import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuotes = new Quotes(0,'', '', new Date(),0,0)
  @Output() addQuotes = new EventEmitter<Quotes>();


  submitQuotes(){
    this.addQuotes.emit(this.newQuotes);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
