import { TestBed } from '@angular/core/testing';

import { ApiServicioRolService } from './api-servicio-rol.service';

describe('ApiServicioRolService', () => {
  let service: ApiServicioRolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicioRolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
