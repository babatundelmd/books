import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { UpdateBookComponent } from './books/update-book/update-book.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'update/:id', component: UpdateBookComponent },
  { path: 'add-book', component: AddBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
