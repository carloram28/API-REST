import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/Users/user.service';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit{
  userForm: FormGroup;

  id: string | null;

  constructor(private fb:FormBuilder,private router:Router,private toastr: ToastrService,private _userService:UserService,private aRouter:ActivatedRoute ){
     this.userForm=this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required]
     })
     this.id = this.aRouter.snapshot.paramMap.get('id');


  }

  ngOnInit(): void {


  }

  agregarUser() {
    const USER: User = {
      username: this.userForm.get('username')?.value,
      email: this.userForm.get('email')?.value,
    };

  if(this.id ){

      this._userService.updateUser(this.id,USER).subscribe({
        next: (data) => {
          this.toastr.info('El usuario se actualizo con éxito', 'Usuario Registrado');
          this.router.navigate(['/listar-user']);
        },
        error: (error) => {
          console.error('Error al actualizar el usuario:', error);
          this.toastr.error('Ocurrió un error al editar el usuario', 'Error');
          this.userForm.reset();
        },
        complete: () => {

        }
      });

    }else{
      console.log(USER);

    this._userService.postUser(USER).subscribe({
      next: (data) => {
        this.toastr.success('El usuario se actualizo con éxito', 'Usuario Actualizado');
        this.router.navigate(['/listar-user']);
      },
      error: (error) => {
        console.error('Error al registrar el usuario:', error);
        this.toastr.error('Ocurrió un error al editar el usuario', 'Error');
        this.userForm.reset();
      },
      complete: () => {

      }
    });
    }


  }




}
