import { TestBed } from '@angular/core/testing';

import { ApiServicioNivelAcademicoService } from './api-servicio-nivel-academico.service';

describe('ApiServicioNivelAcademicoService', () => {
  let service: ApiServicioNivelAcademicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServicioNivelAcademicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
