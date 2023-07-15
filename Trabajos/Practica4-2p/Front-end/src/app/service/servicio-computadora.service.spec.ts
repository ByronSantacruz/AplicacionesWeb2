import { TestBed } from '@angular/core/testing';

import { ServicioComputadoraService } from './servicio-computadora.service';

describe('ServicioComputadoraService', () => {
  let service: ServicioComputadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioComputadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
