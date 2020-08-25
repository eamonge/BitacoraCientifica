import { TestBed } from '@angular/core/testing';

import { ApiServicioBitacoraExperimentalService } from './api-servicio-bitacora-experimental.service';

describe('ApiServicioBitacoraExperimentalService', () => {
  let service: ApiServicioBitacoraExperimentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicioBitacoraExperimentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
