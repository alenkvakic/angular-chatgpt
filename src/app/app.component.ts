import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatGptService } from './chat-gpt.service';
import { catchError, take, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Message } from './models/message.model';
import { ErrorResponse } from './models/chat-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userMessage = '';
  conversation: Message[] = [
    { role: 'system', content: 'As an adept assistant, you possess extensive expertise in Angular, RxJS, TypeScript, and various programming languages, honed through countless years of experience. Your remarkable comprehension of design principles, clean code, and testing methodologies enables you to provide invaluable guidance and support, making you an indispensable resource for developers everywhere.' }
  ];

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  constructor(private chatGptService: ChatGptService) {}

  sendMessage(event: Event, message: string): void {
    event.preventDefault();
    if (!message.trim()) return;

    this.conversation.push({ role: 'user', content: message });
    this.userMessage = '';

    this.chatGptService
      .chat(this.conversation)
      .pipe(
        take(1),
        tap(response => {
          const assistantMessage = response.choices[0].message.content;
          this.conversation.push({ role: 'assistant', content: assistantMessage });
          this.scrollToBottom();
        }),
        catchError((error) => this.handleError(error))
      )
      .subscribe();
  }

  handleEnterKey(event: Event): void {
    event.preventDefault();
    this.sendMessage(event, this.userMessage);
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    setTimeout(() => {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    }, 0);
  }

  private handleError(error: ErrorResponse): Observable<unknown> {
    if (error.error && error.error.message) {
      let errorMessage = `Error: ${error.error.message}`;
      if (error.error.type) {
        errorMessage += ` (Type: ${error.error.type})`;
      }
      this.conversation.push({ role: 'error', content: errorMessage });
    } else {
      this.conversation.push({ role: 'error', content: 'An unknown error occurred.' });
    }
    this.scrollToBottom();
    return of(null);
  }
}
