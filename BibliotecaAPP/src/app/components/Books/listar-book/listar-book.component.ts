import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/Books/books.service';


@Component({
  selector: 'app-listar-book',
  templateUrl: './listar-book.component.html',
  styleUrls: ['./listar-book.component.css']
})
export class ListarBookComponent implements OnInit {

  listBooks:Book[]=[]
  constructor(private _bookService:BooksService,private toastr:ToastrService){}

  ngOnInit(): void {
    this.obtenerBooks();

  }

  obtenerBooks(): void {
    this._bookService.getBooks().subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.listBooks = data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  deleteBook(id: any) {
    this._bookService.deleteBook(id).subscribe({
      next: () => {
        this.toastr.error('Book eliminado exitosamente', 'Book Eliminado');
        this.obtenerBooks();
      },
      error: (error) => {
        console.error('Error al eliminar el book:', error);
        this.toastr.error('Ocurrió un error al eliminar el book', 'Error');
      }
    });
  }


}


