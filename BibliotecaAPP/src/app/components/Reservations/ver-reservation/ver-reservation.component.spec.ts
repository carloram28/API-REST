import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservationComponent } from './ver-reservation.component';

describe('VerReservationComponent', () => {
  let component: VerReservationComponent;
  let fixture: ComponentFixture<VerReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerReservationComponent]
    });
    fixture = TestBed.createComponent(VerReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
