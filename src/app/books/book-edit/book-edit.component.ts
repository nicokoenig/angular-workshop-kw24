import { Component, OnInit } from '@angular/core';
import { Book } from '../book-list/book.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  isbn = '';
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
  }

  save() {
    if (this.book) {
      this.bookData.updateBook(this.book).subscribe(() => {
        this.router.navigate(['..']);
      });
    }
  }
}
