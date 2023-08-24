import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBookComponent } from './listar-book.component';

describe('ListarBookComponent', () => {
  let component: ListarBookComponent;
  let fixture: ComponentFixture<ListarBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarBookComponent]
    });
    fixture = TestBed.createComponent(ListarBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
