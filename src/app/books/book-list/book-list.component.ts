import { Component } from '@angular/core';
import { Book } from './book.interface';
import { BookDataService } from '../book-data.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private bookData: BookDataService) {
    this.books$ = this.bookData.getBooks();
  }
}
