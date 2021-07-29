import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
books$
  constructor(private books: BooksService) { }

  ngOnInit (): void {
    this.loadBooks()
  }


  loadBooks () {
    this.books.getBooks().subscribe((res) => {
        this.books$ = res
    })
  }
}
