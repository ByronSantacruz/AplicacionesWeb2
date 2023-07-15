import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamistasComponent } from './prestamistas.component';

describe('PrestamistasComponent', () => {
  let component: PrestamistasComponent;
  let fixture: ComponentFixture<PrestamistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrestamistasComponent]
    });
    fixture = TestBed.createComponent(PrestamistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
