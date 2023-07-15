import { TestBed } from '@angular/core/testing';

import { ServicioPrestamistaService } from './servicio-prestamista.service';

describe('ServicioPrestamistaService', () => {
  let service: ServicioPrestamistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPrestamistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
