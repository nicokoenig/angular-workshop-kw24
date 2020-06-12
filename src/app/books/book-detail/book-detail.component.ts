import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Book } from '../book-list/book.interface';
import { switchMap, map } from 'rxjs/operators';

interface BookDetailParams {
  isbn: string;
}

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  isbn = '';
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.bookData.getBookByIsbn(params.isbn);
        })
      )
      .subscribe((book) => {
        this.book = book;
      });

    // Anti-Pattern
    // this.route.params.subscribe((params) => {
    //   this.isbn = params.isbn;
    //   this.bookData.getBookByIsbn(this.isbn).subscribe((book) => {
    //     this.book = book;
    //   });
    // });

    // Typisierte Paramter
    // this.route.params
    //   .pipe(
    //     map((params: Params) => (params as BookDetailParams).isbn),
    //     switchMap((isbn) => this.bookData.getBookByIsbn(isbn))
    //   )
    //   .subscribe((book) => {
    //     this.book = book;
    //   });
  }
}
