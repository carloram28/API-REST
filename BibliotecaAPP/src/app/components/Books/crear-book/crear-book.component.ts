import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/Books/books.service';

@Component({
  selector: 'app-crear-book',
  templateUrl: './crear-book.component.html',
  styleUrls: ['./crear-book.component.css']
})
export class CrearBookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private toastr: ToastrService,private _bookService:BooksService ){
     this.bookForm=this.fb.group({
      title:['',Validators.required],
      author:['',Validators.required],
      available:['', [Validators.required, this.booleanValidator]]

     })

  }

  ngOnInit(): void {

  }
  booleanValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value !== 'true' && value !== 'false') {
      return { boolean: true };
    }
    return null;
  }

  agregarBook() {
    const BOOK: Book = {
      title: this.bookForm.get('title')?.value,
      author: this.bookForm.get('author')?.value,
      available:this.bookForm.get('available')?.value
    };



    console.log(BOOK);

    this._bookService.postBook(BOOK).subscribe({
      next: (data) => {
        this.toastr.success('El book se registró con éxito', 'BOOK Registrado');
        this.router.navigate(['/listar-book']);
      },
      error: (error) => {
        console.error('Error al registrar book:', error);
        this.toastr.error('Ocurrió un error al registrar el book', 'Error');
        this.bookForm.reset();
      },
      complete: () => {

      }
    });
  }
}
