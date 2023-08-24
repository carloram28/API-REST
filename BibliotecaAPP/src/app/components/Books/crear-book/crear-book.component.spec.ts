import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBookComponent } from './crear-book.component';

describe('CrearBookComponent', () => {
  let component: CrearBookComponent;
  let fixture: ComponentFixture<CrearBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearBookComponent]
    });
    fixture = TestBed.createComponent(CrearBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
