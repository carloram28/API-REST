import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { ReservationsService } from 'src/app/services/Reservations/reservations.service';
import { Reservation } from '../../../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-crear-reservation',
  templateUrl: './crear-reservation.component.html',
  styleUrls: ['./crear-reservation.component.css']
})
export class CrearReservationComponent implements OnInit {
  reservationForm: FormGroup;


  constructor(private fb:FormBuilder,private router:Router,private toastr: ToastrService,private _reservationService:ReservationsService, private aRouter: ActivatedRoute ){
     this.reservationForm=this.fb.group({
      user:['',Validators.required],
      book:['',Validators.required],
      dateReserved:['', Validators.required],
      dateDue:['',Validators.required]


     })


  }

  ngOnInit(): void {

  }

  agregarReservation() {
    const RESERVATION: Reservation = {
      user: this.reservationForm.get('user')?.value,
      book: this.reservationForm.get('book')?.value,
      dateReserved:this.reservationForm.get('dateReserved')?.value,
      dateDue:this.reservationForm.get('dateDue')?.value
    };



    console.log(RESERVATION);

    this._reservationService.postReservation(RESERVATION).subscribe({
      next: (data) => {
        this.toastr.success('La reservation se registró con éxito', 'Reservation Registrada');
        this.router.navigate(['/listar-reservation']);
       },
       error: (error) => {
        console.error('Error al registrar reservation:', error);
        this.toastr.error('Ocurrió un error al registrar la reservation', 'Error');
        this.reservationForm.reset();
       },
       complete: () => {

       }
     });
    }


  }





