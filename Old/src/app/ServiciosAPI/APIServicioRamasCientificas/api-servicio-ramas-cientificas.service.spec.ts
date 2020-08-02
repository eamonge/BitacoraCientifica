import { TestBed } from '@angular/core/testing';

import { ApiServicioRamasCientificasService } from './api-servicio-ramas-cientificas.service';

describe('ApiServicioRamasCientificasService', () => {
  let service: ApiServicioRamasCientificasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicioRamasCientificasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
