import { Injectable } from '@angular/core';
import { Book } from './book-list/book.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookDataService {
  baseUrl = 'http://localhost:4730';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/books`);
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrl}/books/${isbn}`);
  }

  updateBook(book: Book) {
    return this.http.put<Book>(`${this.baseUrl}/books/${book.isbn}`, book);
  }
}
