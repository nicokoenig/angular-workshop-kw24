import { Injectable } from '@angular/core';
import { Book } from './book-list/book.interface';
import { BooksModule } from './books.module';
import { Observable, of, from, interval } from 'rxjs';
import { delay, take, map, tap } from 'rxjs/operators';

@Injectable()
export class BookDataService {
  books: Book[] = [
    {
      title: 'Design Patterns',
      subtitle: 'Elements of Reusable Object-Oriented Software',
    },
    {
      title: 'REST und HTTP',
      subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
    },
    {
      title: 'Eloquent JavaScript',
      subtitle: 'A Modern Introduction to Programming',
    },
  ];

  constructor() {}

  getBooks(): Observable<Book[]> {
    return of(this.books).pipe(delay(500));
  }

  getSingleBooks(): Observable<Book> {
    return interval(1000).pipe(
      take(3),
      map((i) => this.books[i]),
      tap((book) => {
        console.log('🐈');
      })
    );
  }
}
