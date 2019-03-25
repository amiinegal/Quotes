import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import {  Quote} from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
      newQuote=new Quote(0,"","",new Date(),8,9);
      @Output() addQuote=new EventEmitter<Quote>();

      @Input() quote:Quote;
      @Output() isComplete= new EventEmitter<boolean>();

      likeButtonClick(){
        this.quote.likeButtonClick ++
      }
      dislikeButtonClick(){
        this.quote.dislikeButtonClick --
      }


      submitQuote(){
        this.addQuote.emit(this.newQuote)
      }

  constructor() { }

  ngOnInit() {
  }

}
