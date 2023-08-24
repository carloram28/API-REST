import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {


  private apiUrl: string = environment.apiUrl;


  constructor(private http:HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`);
  }

  getReservationById(id: string): Observable<Reservation> {

    return this.http.get<Reservation>(`${this.apiUrl}/reservations/${id}`);
  }

  postReservation(reservation:Reservation):Observable<any>{
    return this.http.post(`${this.apiUrl}/reservations`,reservation);
  }

  updateReservation(id: string, reservation: Reservation): Observable<Reservation> {

    return this.http.put<Reservation>(`${this.apiUrl}/reservations/${id}`, reservation);
  }
  deleteReservation(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/reservations/${id}`);
  }

}
