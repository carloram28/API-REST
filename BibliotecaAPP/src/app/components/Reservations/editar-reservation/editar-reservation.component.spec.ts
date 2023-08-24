import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservationComponent } from './editar-reservation.component';

describe('EditarReservationComponent', () => {
  let component: EditarReservationComponent;
  let fixture: ComponentFixture<EditarReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarReservationComponent]
    });
    fixture = TestBed.createComponent(EditarReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
