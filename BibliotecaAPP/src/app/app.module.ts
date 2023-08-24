import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import{HttpClientModule}from '@angular/common/http'
//Componentes
import { AppComponent } from './app.component';
import { CrearUserComponent } from './components/Users/crear-user/crear-user.component';
import { ListarUserComponent } from './components/Users/listar-user/listar-user.component';
import { EditarUserComponent } from './components/Users/editar-user/editar-user.component';
import { VerUserComponent } from './components/Users/ver-user/ver-user.component';
import { VistaPrincipalComponent } from './components/vista-principal/vista-principal.component';
import { CrearBookComponent } from './components/Books/crear-book/crear-book.component';
import { EditarBookComponent } from './components/Books/editar-book/editar-book.component';
import { ListarBookComponent } from './components/Books/listar-book/listar-book.component';
import { VerBookComponent } from './components/Books/ver-book/ver-book.component';
import { CrearReservationComponent } from './components/Reservations/crear-reservation/crear-reservation.component';
import { ListarReservationComponent } from './components/Reservations/listar-reservation/listar-reservation.component';
import { VerReservationComponent } from './components/Reservations/ver-reservation/ver-reservation.component';
import { EditarReservationComponent } from './components/Reservations/editar-reservation/editar-reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    CrearUserComponent,
    ListarUserComponent,
    EditarUserComponent,
    VerUserComponent,
    VistaPrincipalComponent,
    CrearBookComponent,
    EditarBookComponent,
    ListarBookComponent,
    VerBookComponent,
    CrearReservationComponent,
    ListarReservationComponent,
    VerReservationComponent,
    EditarReservationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
