
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getBookById(id: string): Observable<Book> {

    return this.http.get<Book>(`${this.apiUrl}/books/${id}`);
  }

  postBook(book:Book):Observable<any>{
    return this.http.post(`${this.apiUrl}/books`,book);
  }

  updateBook(id: string, book: Book): Observable<Book> {

    return this.http.put<Book>(`${this.apiUrl}/books/${id}`, book);
  }
  deleteBook(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/books/${id}`);
  }

}
