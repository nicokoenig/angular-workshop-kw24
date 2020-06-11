import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './book-data.service';

@NgModule({
  declarations: [BooksComponent, BookListComponent],
  imports: [CommonModule, BooksRoutingModule, HttpClientModule],
  exports: [BooksComponent, BookListComponent],
  providers: [BookDataService],
})
export class BooksModule {}
