import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  formData: FormGroup

  constructor(private books: BooksService, private builder: FormBuilder) { }

  ngOnInit (): void {
    this.formData = this.builder.group({
      id: new FormControl(''),
      author: new FormControl(''),
      country: new FormControl(''),
      language: new FormControl(''),
      pages: new FormControl(''),
      title: new FormControl(''),
      year: new FormControl(''),
    })
  }

  onSubmit (formData) {
    this.books.createBook(formData).subscribe(res => {
      setTimeout(() => {
        location.href = ''
      }, 1000);
    })
  }

}
