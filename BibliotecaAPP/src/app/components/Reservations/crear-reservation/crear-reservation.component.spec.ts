import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReservationComponent } from './crear-reservation.component';

describe('CrearReservationComponent', () => {
  let component: CrearReservationComponent;
  let fixture: ComponentFixture<CrearReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearReservationComponent]
    });
    fixture = TestBed.createComponent(CrearReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
