import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes User
import { ListarUserComponent } from './components/Users/listar-user/listar-user.component';
import { CrearUserComponent } from './components/Users/crear-user/crear-user.component';
import { EditarUserComponent } from './components/Users/editar-user/editar-user.component';
import { VerUserComponent } from './components/Users/ver-user/ver-user.component';
import { VistaPrincipalComponent } from './components/vista-principal/vista-principal.component';


//Componentes Books

import { ListarBookComponent } from './components/Books/listar-book/listar-book.component';
import { CrearBookComponent } from './components/Books/crear-book/crear-book.component';
import { EditarBookComponent } from './components/Books/editar-book/editar-book.component';
import { VerBookComponent } from './components/Books/ver-book/ver-book.component';

//cOMPONENTES Reservations
import { ListarReservationComponent } from './components/Reservations/listar-reservation/listar-reservation.component';
import { CrearReservationComponent } from './components/Reservations/crear-reservation/crear-reservation.component';
import { VerReservationComponent } from './components/Reservations/ver-reservation/ver-reservation.component';
import { EditarReservationComponent } from './components/Reservations/editar-reservation/editar-reservation.component';


const routes: Routes = [
  //path Users
  { path: 'users', component: ListarUserComponent },
  {path:'listar-user',component:ListarUserComponent},
  {path:'crear-user',component:CrearUserComponent},
  {path:'editar-user/:id',component:EditarUserComponent},
  {path:'ver-user/:id',component:VerUserComponent},
  // path books
  { path: 'books', component: ListarBookComponent },
  {path:'listar-book',component:ListarBookComponent},
  {path:'crear-book',component:CrearBookComponent},
  {path:'editar-book/:id',component:EditarBookComponent},
  {path:'ver-book/:id',component:VerBookComponent},
  //path reservations
  { path: 'reservations', component:ListarReservationComponent },
  {path:'listar-reservation',component:ListarReservationComponent},
  {path:'crear-reservation',component:CrearReservationComponent},
  {path:'editar-reservation/:id',component:EditarReservationComponent},
  {path:'ver-reservation/:id',component:VerReservationComponent},
  {path:'**',redirectTo: '',pathMatch:'full'},
  {path:'',component:VistaPrincipalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
