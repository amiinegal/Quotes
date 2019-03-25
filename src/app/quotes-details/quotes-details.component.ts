
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote} from '../quote'
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

@Input() quote:Quote;
@Output() isComplete= new EventEmitter<boolean>();

likeButtonClick(){
  this.quote.likeButtonClick +1
}
dislikeButtonClick(){
  this.quote.dislikeButtonClick +1
}

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}

  constructor() { }

  ngOnInit() {
  }

}