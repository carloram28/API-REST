import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationsService } from 'src/app/services/Reservations/reservations.service';

@Component({
  selector: 'app-ver-reservation',
  templateUrl: './ver-reservation.component.html',
  styleUrls: ['./ver-reservation.component.css']
})
export class VerReservationComponent implements OnInit {
  reservation:any;

  constructor(private route: ActivatedRoute,private _reservationService:ReservationsService){}

  ngOnInit(): void {
    const reservationId = this.route.snapshot.params['id'];
    this.obtenerReservation(reservationId);

  }

  obtenerReservation(id: string) {
    this._reservationService.getReservationById(id).subscribe(reservation => {
      if(reservation){
        this.reservation = reservation;
      }

    });
  }
}

