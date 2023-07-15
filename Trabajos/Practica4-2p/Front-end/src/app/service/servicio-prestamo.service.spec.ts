import { TestBed } from '@angular/core/testing';

import { ServicioPrestamoService } from './servicio-prestamo.service';

describe('ServicioPrestamoService', () => {
  let service: ServicioPrestamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPrestamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
