import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/Users/user.service';


@Component({
  selector: 'app-ver-user',
  templateUrl: './ver-user.component.html',
  styleUrls: ['./ver-user.component.css']
})
export class VerUserComponent implements OnInit {
   user:any;

  constructor(private route: ActivatedRoute,private _userService:UserService){}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    this.obtenerUser(userId);

  }

  obtenerUser(id: string) {
    this._userService.getUserById(id).subscribe(user => {
      if(user){
        this.user = user;
      }

    });
  }



}
