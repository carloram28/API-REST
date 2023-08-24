import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Reservation } from 'src/app/models/reservation';
import { ReservationsService } from 'src/app/services/Reservations/reservations.service';

@Component({
  selector: 'app-listar-reservation',
  templateUrl: './listar-reservation.component.html',
  styleUrls: ['./listar-reservation.component.css']
})
export class ListarReservationComponent implements OnInit{
  listReservations:Reservation[]=[]
  constructor(private _reservationService:ReservationsService,private toastr:ToastrService){}

  ngOnInit(): void {
    this.obtenerReservations();

  }

  obtenerReservations(): void {
    this._reservationService.getReservations().subscribe({
      next: (data: any[]) => {
        console.log(data);
        this.listReservations = data;
      },
      error: (error) => {
        console.error('Error reservations:', error);
      }
    });
  }

  deleteReservation(id: any) {
    this._reservationService.deleteReservation(id).subscribe({
      next: () => {
        this.toastr.error('Reservation eliminada exitosamente', 'Reservation Eliminada');
        this.obtenerReservations();
      },
      error: (error) => {
        console.error('Error al eliminar la reservation:', error);
        this.toastr.error('Ocurrió un error al eliminar la reservation', 'Error');
      }
    });
  }
}
