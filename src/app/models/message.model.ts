export interface Message {
  role: 'user' | 'assistant' | 'system' | 'error';
  content: string;
}
