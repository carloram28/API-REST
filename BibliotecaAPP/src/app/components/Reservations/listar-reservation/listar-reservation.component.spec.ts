import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReservationComponent } from './listar-reservation.component';

describe('ListarReservationComponent', () => {
  let component: ListarReservationComponent;
  let fixture: ComponentFixture<ListarReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarReservationComponent]
    });
    fixture = TestBed.createComponent(ListarReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
