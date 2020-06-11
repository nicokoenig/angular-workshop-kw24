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
    const nextFn = (books: Book[]) => {
      console.log('Neue Bücher 👍: ', books);
      this.books = books;
    };

    this.bookData.getBooks().subscribe(
      nextFn,
      (err) => {
        console.error('Gibt heute keine Bücher 😭', err);
      },
      () => {
        console.log('Complete 🔥');
      }
    );

    // Alternative Lösung
    // this.bookData.getSingleBooks().subscribe((book) => {
    //   this.books.push(book);
    // });
  }

  ngOnInit(): void {}
}
