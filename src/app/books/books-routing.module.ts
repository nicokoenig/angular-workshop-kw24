import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ConfirmCandeactivateGuard } from './guards/confirm-candeactivate.guard';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent,
  },
  {
    path: ':isbn',
    component: BookDetailComponent,
    // canDeactivate: [ConfirmCandeactivateGuard],
  },
  {
    path: ':isbn/edit',
    component: BookEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
