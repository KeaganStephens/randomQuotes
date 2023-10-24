import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent {
  @Output() myEvent = new EventEmitter<any>();

  loadNewQuote(){
    console.log("hello")
    this.myEvent.emit(null);
  }
}
