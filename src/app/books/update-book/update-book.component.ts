import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: [ './update-book.component.scss' ]
})
export class UpdateBookComponent implements OnInit {
  formData: FormGroup
  book$
  id


  constructor (private book: BooksService, private route: ActivatedRoute, private builder: FormBuilder) { }

  ngOnInit (): void {
    this.route.paramMap.subscribe((param) => {
       this.id = param.get('id')
      this.book.getBook(this.id).subscribe(res => {
        this.book$ = res
        this.formData.patchValue(this.updateValues())
      })
    })

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


  updateValues () {
    return {
      author: this.book$.author,
      country: this.book$.country,
      language: this.book$.language,
      pages: this.book$.pages,
      title: this.book$.title,
      year: this.book$.year,
    };
  }


  onSubmit (formData) {
    this.book.updateBook(this.id, formData).subscribe(res => {
      setTimeout(() => {
        location.href = ''
      }, 1000);
    })
  }

}

