import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/Books/books.service';


@Component({
  selector: 'app-ver-book',
  templateUrl: './ver-book.component.html',
  styleUrls: ['./ver-book.component.css']
})
export class VerBookComponent implements OnInit {
  book:any;

  constructor(private route: ActivatedRoute,private _bookService:BooksService){}

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['id'];
    this.obtenerBook(bookId);

  }

  obtenerBook(id: string) {
    this._bookService.getBookById(id).subscribe(book => {
      if(book){
        this.book = book;
      }

    });
  }
}
