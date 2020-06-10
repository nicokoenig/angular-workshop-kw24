import { Component, OnInit } from '@angular/core';
import { Book } from './book.interface';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookData: BookDataService) {
    this.books = this.bookData.getBooks();
  }

  ngOnInit(): void {}
}
