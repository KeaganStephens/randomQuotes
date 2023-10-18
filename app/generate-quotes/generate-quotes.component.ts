import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import the necessary modules
import { environment } from 'environments';

@Component({
  selector: 'app-generate-quotes',
  templateUrl: './generate-quotes.component.html',
  styleUrls: ['./generate-quotes.component.css']
})
export class GenerateQuotesComponent {

  constructor(private http: HttpClient) {}

  generateQuote() {
    const category = 'happiness'; // Specify the category you want
    const apiKey = environment.apiKey; // Replace with your API Key

    const headers = new HttpHeaders({
      'X-Api-Key': apiKey
    });

    this.http.get<any[]>('https://api.api-ninjas.com/v1/quotes?category=' + category, { headers }).subscribe(
      (response) => {
        const randomQuote = response[0]; // Assuming you want only one quote
        console.log(`"${randomQuote.quote}" - ${randomQuote.author}`);
      },
      (error) => {
        console.error('Error fetching quotes: ', error);
      }
    );
  }
  
  ngOnInit(){
    this.generateQuote()
  }
}

