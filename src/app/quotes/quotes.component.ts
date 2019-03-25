import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote(1,'You`re not to be so blind with patriotism that you can`t face reality','...Malcom x',new Date(2019,3,13 ),1,0),
    new Quote(2,'The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.','...Bob marley',new Date(2019,5,17 ),12,9),
    new Quote(3, 'imagination is more important than knowledge','...Abert Einstein',new Date(2019,4,14 ),2,9),
    new Quote(3, 'Life consists of two days,one for you and one against you','...Ali Ibn Abu-Talib',new Date(2019,8,14 ),8,9),
   

]

deleteQuote(isComplete,index){
  if (isComplete){
    let toDelete=confirm(`You sure you want to delete ${this.quotes[index].name}`)
  
    if (toDelete){
      this.quotes.splice(index,1)
    }
   
  }
  
}


addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}


toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
  constructor() { }

  ngOnInit() {
  }

}
