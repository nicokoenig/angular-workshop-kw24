import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './book-data.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmCandeactivateGuard } from './guards/confirm-candeactivate.guard';

@NgModule({
  declarations: [BooksComponent, BookListComponent, BookDetailComponent],
  imports: [CommonModule, BooksRoutingModule, HttpClientModule],
  exports: [BooksComponent, BookListComponent],
  providers: [BookDataService, ConfirmCandeactivateGuard],
})
export class BooksModule {}
