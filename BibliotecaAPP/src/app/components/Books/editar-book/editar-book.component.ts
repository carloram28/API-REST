import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/Books/books.service';

@Component({
  selector: 'app-editar-book',
  templateUrl: './editar-book.component.html',
  styleUrls: ['./editar-book.component.css']
})
export class EditarBookComponent implements OnInit {
  bookForm: FormGroup;

  id: string | null;

  constructor(private fb:FormBuilder,private router:Router,private toastr: ToastrService,private _bookService:BooksService,private aRouter:ActivatedRoute ){
     this.bookForm=this.fb.group({
      title:['',Validators.required],
      author:['',Validators.required],
      available:['', [Validators.required, this.booleanValidator]]
     })
     this.id = this.aRouter.snapshot.paramMap.get('id');


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

  if(this.id ){

      this._bookService.updateBook(this.id,BOOK).subscribe({
        next: (data) => {
          this.toastr.info('El book se actualizo con éxito', 'Book Actualizado');
          this.router.navigate(['/listar-book']);
        },
        error: (error) => {
          console.error('Error al actualizar el book:', error);
          this.toastr.error('Ocurrió un error al editar el usuario', 'Error');
          this.bookForm.reset();
        },
        complete: () => {

        }
      });

    }else{
      console.log(BOOK);

    this._bookService.postBook(BOOK).subscribe({
      next: (data) => {
        this.toastr.success('El usuario se actualizo con éxito', 'Usuario Registrado');
        this.router.navigate(['/listar-user']);
      },
      error: (error) => {
        console.error('Error al registrar el usuario:', error);
        this.toastr.error('Ocurrió un error al editar el usuario', 'Error');
        this.bookForm.reset();
      },
      complete: () => {

      }
    });
    }


  }

}
