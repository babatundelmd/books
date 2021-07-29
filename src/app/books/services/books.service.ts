import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  data = 'http://localhost:3000/posts'

  constructor (private http: HttpClient) { }

  createBook (payload: any) {
   return this.http.post(`${this.data}`, payload)
  }

  deleteBook (id: any) {
    return this.http.delete(`${this.data}/${id}`)
  }

  getBook (id: any) {
    return this.http.get(`${this.data}/${id}`)
  }

  updateBook (id: any, payload: any) {
    return this.http.delete(`${this.data}/${id}`, payload)
  }

  getBooks () {
   return this.http.get(`${this.data}`)
  }
}
