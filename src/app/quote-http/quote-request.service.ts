import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Quote } from '../quote-class/quote';


@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  quote: Quote;

  constructor(private http:HttpClient) {
    this.quote = new Quote(""," ")
   }

   
}
