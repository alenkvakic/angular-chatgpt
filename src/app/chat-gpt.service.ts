import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChatResponse } from './models/chat-response.model';

/*
 * To set up your API key, create a file named 'environment.ts' in the 'src/environments' folder.
 * The file should have the following content:
 *
 * export const environment = {
 *   production: false,
 *   chatGptApiKey: 'YOUR_API_KEY_HERE',
 * };
 *
 * Replace 'YOUR_API_KEY_HERE' with your actual OpenAI API key.
 */

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  chat(messages:  Array<{ role: string; content: string }>): Observable<ChatResponse> {
    const body = {
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.5, // adjust the temperature of the response - 0.5 works well with programming questions
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.chatGptApiKey}` // see note on top
    };

    return this.http.post<ChatResponse>(this.apiUrl, body, { headers });
  }
}
