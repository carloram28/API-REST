import { Component,OnInit} from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/Users/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.component.html',
  styleUrls: ['./listar-user.component.css']
})
export class ListarUserComponent implements OnInit {
  listUsers:User[]=[]
  constructor(private _userService:UserService,private toastr:ToastrService){}

  ngOnInit(): void {
    this.obtenerUsers();

  }

  obtenerUsers(): void {
    this._userService.getUsers().subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.listUsers = data;
      },
      error: (error) => {
        console.error('Error users:', error);
      }
    });
  }

  deleteUser(id: any) {
    this._userService.deleteUser(id).subscribe({
      next: () => {
        this.toastr.error('Usuario eliminado exitosamente', 'Usuario Eliminado');
        this.obtenerUsers();
      },
      error: (error) => {
        console.error('Error al eliminar el usuario:', error);
        this.toastr.error('Ocurrió un error al eliminar el usuario', 'Error');
      }
    });
  }


}
