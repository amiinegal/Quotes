import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote(1,'An idiot never changes his mind','albert',new Date(2019,3,13 )),
    new Quote(2,'You educate a woman you educate a nation','gandhi',new Date(2019,5,17 )),
    new Quote(3, 'float like a butterfly sting like a bee','mohamed ali',new Date(2019,4,14 )),
   

]

toogleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
  constructor() { }

  ngOnInit() {
  }

}
