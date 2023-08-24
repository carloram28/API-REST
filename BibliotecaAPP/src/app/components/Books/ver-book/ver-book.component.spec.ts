import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBookComponent } from './ver-book.component';

describe('VerBookComponent', () => {
  let component: VerBookComponent;
  let fixture: ComponentFixture<VerBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBookComponent]
    });
    fixture = TestBed.createComponent(VerBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
