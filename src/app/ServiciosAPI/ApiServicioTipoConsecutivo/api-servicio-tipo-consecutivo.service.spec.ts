import { TestBed } from '@angular/core/testing';

import { ApiServicioTipoConsecutivoService } from './api-servicio-tipo-consecutivo.service';

describe('ApiServicioTipoConsecutivoService', () => {
  let service: ApiServicioTipoConsecutivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicioTipoConsecutivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
