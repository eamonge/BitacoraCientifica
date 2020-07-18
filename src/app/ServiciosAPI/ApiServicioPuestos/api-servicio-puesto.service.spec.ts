import { TestBed } from '@angular/core/testing';

import { ApiServicioPuestoService } from './api-servicio-puesto.service';

describe('ApiServicioPuestoService', () => {
  let service: ApiServicioPuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicioPuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
