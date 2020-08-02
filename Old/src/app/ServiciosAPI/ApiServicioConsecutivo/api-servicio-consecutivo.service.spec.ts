import { TestBed } from '@angular/core/testing';

import { ApiServicioConsecutivoService } from './api-servicio-consecutivo.service';

describe('ApiServicioConsecutivoService', () => {
  let service: ApiServicioConsecutivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicioConsecutivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
