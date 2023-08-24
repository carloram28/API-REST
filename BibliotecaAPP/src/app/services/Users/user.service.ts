import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';





@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUserById(id: string): Observable<User> {

    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  postUser(user:User):Observable<any>{
    return this.http.post(`${this.apiUrl}/users`,user);
  }

  updateUser(id: string, user: User): Observable<User> {

    return this.http.put<User>(`${this.apiUrl}/users/${id}`, user);
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }
}
