import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/Users/user.service';


@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent implements OnInit{
  userForm: FormGroup;

  constructor(private fb:FormBuilder,private router:Router,private toastr: ToastrService,private _userService:UserService ){
     this.userForm=this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required]
     })

  }

  ngOnInit(): void {

  }

  agregarUser() {
    const USER: User = {
      username: this.userForm.get('username')?.value,
      email: this.userForm.get('email')?.value,
    };

    console.log(USER);

    this._userService.postUser(USER).subscribe({
      next: (data) => {
        this.toastr.success('El usuario se registró con éxito', 'Usuario Registrado');
        this.router.navigate(['/listar-user']);
      },
      error: (error) => {
        console.error('Error al registrar el usuario:', error);
        this.toastr.error('Ocurrió un error al registrar el usuario', 'Error');
        this.userForm.reset();
      },
      complete: () => {

      }
    });
  }




}
