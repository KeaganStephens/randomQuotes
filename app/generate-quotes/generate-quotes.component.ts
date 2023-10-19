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

  displayQuote = ''

  word_list = ['age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 'best', 'birthday', 'business', 'car', 'change', 'communications', 'computers', 'cool', 'courage', 'dad', 'dating', 'death', 'design', 'dreams', 'education', 'environmental', 'equality', 'experience', 'failure', 'faith', 'family', 'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship', 'funny', 'future', 'god', 'good', 'government', 'graduation', 'great', 'happiness', 'health', 'history', 'home', 'hope', 'humor', 'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership', 'learning', 'legal', 'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success']
  listLength = this.word_list.length

  generateQuote() {
    const category = this.word_list[Math.floor(Math.random() * this.listLength)]; 
    const apiKey = environment.apiKey; 
    const headers = new HttpHeaders({
      'X-Api-Key': apiKey
    });

    this.http.get<any[]>('https://api.api-ninjas.com/v1/quotes?category=' + category, { headers }).subscribe(
      (response) => {
        const randomQuote = response[0]; // Assuming you want only one quote
        this.displayQuote = `"${randomQuote.quote}" - ${randomQuote.author}`;
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

