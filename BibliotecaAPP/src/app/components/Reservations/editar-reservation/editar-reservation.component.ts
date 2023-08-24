import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reservation } from 'src/app/models/reservation';
import { ReservationsService } from 'src/app/services/Reservations/reservations.service';
import { UserService } from 'src/app/services/Users/user.service';

@Component({
  selector: 'app-editar-reservation',
  templateUrl: './editar-reservation.component.html',
  styleUrls: ['./editar-reservation.component.css']
})
export class EditarReservationComponent {
  reservationForm: FormGroup;

  id: string | null;

  constructor(private fb:FormBuilder,private router:Router,private toastr: ToastrService,private _reservationService:ReservationsService,private aRouter:ActivatedRoute ){
     this.reservationForm=this.fb.group({
      user:['',Validators.required],
      book:['',Validators.required],
      dateReserved:['', Validators.required],
      dateDue:['',Validators.required]
     })
     this.id = this.aRouter.snapshot.paramMap.get('id');


  }

  ngOnInit(): void {


  }

  agregarReservation() {
    const RESERVATION:  Reservation = {
      user: this.reservationForm.get('user')?.value,
      book: this.reservationForm.get('book')?.value,
      dateReserved:this.reservationForm.get('dateReserved')?.value,
      dateDue:this.reservationForm.get('dateDue')?.value
    };

  if(this.id ){

      this._reservationService.updateReservation(this.id,RESERVATION).subscribe({
        next: (data) => {
          this.toastr.info('La reservation se actualizo con éxito', 'Reservation Actualizada');
          this.router.navigate(['/listar-reservation']);
        },
        error: (error) => {
          console.error('Error al actualizar la reservation:', error);
          this.toastr.error('Ocurrió un error al editar la reservation', 'Error');
          this.reservationForm.reset();
        },
        complete: () => {

        }
      });

    }else{
      console.log(RESERVATION);

    this._reservationService.postReservation(RESERVATION).subscribe({
      next: (data) => {
        this.toastr.success('La reservation se actualizo con éxito', 'Reservation Actualizada');
        this.router.navigate(['/listar-reservation']);
      },
      error: (error) => {
        console.error('Error al actualizar el usuario:', error);
        this.toastr.error('Ocurrió un error al editar la reservation', 'Error');
        this.reservationForm.reset();
      },
      complete: () => {

      }
    });
    }


  }
}
