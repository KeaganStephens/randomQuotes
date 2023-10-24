import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateQuotesComponent } from './generate-quotes/generate-quotes.component';
import { NewQuoteComponent } from './generate-quotes/new-quote/new-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateQuotesComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
